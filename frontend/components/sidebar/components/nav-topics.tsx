"use client";

import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { IconDots, IconTrash, IconPencil } from "@tabler/icons-react";
import AddTopic from "../dialogs/add-topic";
import EditTopic from "../dialogs/edit-topic";
import {
  useDeleteTopicMutation,
  useTopicsQuery,
} from "@/hooks/topics/useTopics";
import { toast } from "sonner";
import { useParams, usePathname, useRouter } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import {
  useActiveDocumentsByUserQuery,
  useDocumentQuery,
  useDocumentsByTopicQuery,
} from "@/hooks/document/useDocument";

export function NavTopics() {
  const { data: topics = [], isLoading, isError, error } = useTopicsQuery();
  const deleteTopicMutation = useDeleteTopicMutation();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams<{ topicId: string; documentId: string }>();

  const { data: documents = [] } = useActiveDocumentsByUserQuery();

  const [renameOpenTopicId, setRenameOpenTopicId] = useState<string | null>(
    null
  );

  async function handleDeleteTopic(topicId: string, topicTitle: string) {
    const ok = window.confirm(
      `Delete topic "${topicTitle}"? This will also permanently delete its documents.`
    );
    if (!ok) return;

    try {
      await deleteTopicMutation.mutateAsync(topicId);
      toast.success(`Deleted "${topicTitle}"`);
      if (pathname.startsWith(`/topics/${topicId}`)) {
        router.replace("/dashboard");
      }

      if (renameOpenTopicId === topicId) {
        setRenameOpenTopicId(null);
      }
    } catch (e: any) {
      toast.error(e?.message ?? "Failed to delete topic");
    }
  }

  console.log(params);
  console.log("topicId 1:", params.topicId);

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <span className="text-base font-semibold inline-flex">Topics</span>

      <SidebarMenu className="mt-4">
        <SidebarMenuItem>
          <AddTopic />
        </SidebarMenuItem>
      </SidebarMenu>

      <SidebarMenu>
        {isLoading && (
          <SidebarMenuItem>
            <div className="text-sm text-muted-foreground px-2 py-1">
              Loading topics...
            </div>
          </SidebarMenuItem>
        )}

        {isError && (
          <SidebarMenuItem>
            <div className="text-sm text-destructive px-2 py-1">
              {(error as Error)?.message ?? "Failed to load topics"}
            </div>
          </SidebarMenuItem>
        )}

        {!isLoading && !isError && topics.length === 0 && (
          <SidebarMenuItem>
            <div className="text-sm text-muted-foreground px-2 py-1">
              No topics yet
            </div>
          </SidebarMenuItem>
        )}

        <SidebarMenuItem>
          <div className="text-sm text-muted-foreground px-2 py-1">
            Your topics
          </div>
        </SidebarMenuItem>
        {topics.map((topic) => {
          const deletingThisTopic =
            deleteTopicMutation.isPending &&
            deleteTopicMutation.variables === topic.id;

          const renameOpen = renameOpenTopicId === topic.id;

          return (
            <SidebarMenuItem key={topic.id}>
              <div className="flex items-center gap-1 w-full">
                <Collapsible
                  className="group/collapsible"
                  defaultOpen={params.topicId === topic.id}
                >
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      className={`data-[active=true]:bg-transparent flex-1 ${
                        params.topicId === topic.id ? "bg-muted" : ""
                      }`}
                      asChild
                    >
                      <div className="flex flex-row items-center">
                        <ChevronRight className="transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        <Link
                          href={`/topics/${topic.id}`}
                          className="flex items-center gap-2"
                        >
                          <div className="line-clamp-1 font-xs text-blue-600 dark:text-blue-400">
                            {topic.title}
                          </div>
                        </Link>
                      </div>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {documents
                        .filter((doc) => doc.topicId === topic.id)
                        .map((doc) => (
                          <SidebarMenuButton
                            key={doc.id}
                            className={`data-[active=true]:bg-transparent flex-1 ${
                              params.documentId === doc.id ? "bg-muted" : ""
                            }`}
                            asChild
                          >
                            <Link href={`/topics/${topic.id}/${doc.id}`}>
                              <div className="line-clamp-1 font-medium">
                                {doc.title}
                              </div>
                            </Link>
                          </SidebarMenuButton>
                        ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>

                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction
                      showOnHover
                      className="data-[state=open]:bg-accent rounded-sm"
                      disabled={deletingThisTopic}
                    >
                      <IconDots size={16} />
                      <span className="sr-only">More</span>
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="w-36 rounded-lg" align="end">
                    <DropdownMenuItem
                      onSelect={(e) => {
                        e.preventDefault();
                        setRenameOpenTopicId(topic.id);
                      }}
                      disabled={deletingThisTopic}
                    >
                      <IconPencil size={16} />
                      <span>Rename</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      onClick={() => handleDeleteTopic(topic.id, topic.title)}
                      variant="destructive"
                      disabled={deletingThisTopic}
                    >
                      <IconTrash size={16} />
                      <span>
                        {deletingThisTopic ? "Deleting..." : "Delete"}
                      </span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <EditTopic
                  open={renameOpen}
                  onOpenChange={(open) =>
                    setRenameOpenTopicId(open ? topic.id : null)
                  }
                  topicId={topic.id}
                  topicTitle={topic.title}
                />
              </div>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

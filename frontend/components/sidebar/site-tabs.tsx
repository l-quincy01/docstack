"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { useDocumentsByTopicQuery } from "@/hooks/document/useDocument";
import { useTopicsQuery } from "@/hooks/topics/useTopics";
import { useParams, usePathname } from "next/navigation";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { Plus, X } from "lucide-react";

type TabItem = {
  id: string;
  label: string;
};

type SiteHeaderProps = {
  children: React.ReactNode;
};

export function SiteTabs({ children }: SiteHeaderProps) {
  const pathname = usePathname();
  const params = useParams<{ topicId?: string; documentId?: string }>();

  const topicId = params?.topicId;
  const documentId = params?.documentId;

  const { data: topics = [] } = useTopicsQuery();
  const { data: documents = [] } = useDocumentsByTopicQuery(topicId!, {
    enabled: !!topicId,
  });

  const topic = topics.find((t) => t.id === topicId);
  const document = documents.find((d) => d.id === documentId);

  const [tabs, setTabs] = useState<TabItem[]>([
    { id: "1", label: "Learn Tab 1" },
  ]);

  const [activeTab, setActiveTab] = useState("1");

  const addTab = () => {
    if (tabs.length >= 5) return;

    const newId = crypto.randomUUID();

    setTabs((prev) => [
      ...prev,
      { id: newId, label: `Learn Tab ${prev.length + 1}` },
    ]);

    setActiveTab(newId);
  };

  const removeTab = (id: string) => {
    if (tabs.length <= 1) return;

    const updated = tabs.filter((tab) => tab.id !== id);
    setTabs(updated);

    if (activeTab === id) {
      setActiveTab(updated[0].id);
    }
  };

  return (
    <div className="flex flex-col justify-start gap-2 px-4 w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center">
          <SidebarTrigger className="p-0 m-0" />
          <TabsList className="m-0 p-0" variant="line">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex items-center gap-2"
              >
                {tab.label}

                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTab(tab.id);
                  }}
                  className="rounded-full p-1 hover:bg-muted cursor-pointer"
                >
                  <X size={14} />
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <Button
            variant="ghost"
            size="sm"
            className="p-0"
            onClick={addTab}
            disabled={tabs.length >= 5}
          >
            <Plus size={16} />
          </Button>
        </div>

        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id}>
            {children}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
/*




  <Tabs value={activeTab} onValueChange={setActiveTab}>
      <div className="flex items-center">
        <TabsList className="m-0 p-0" variant="line">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="flex items-center gap-2"
            >
              {tab.label}

              <div
                onClick={(e) => {
                  e.stopPropagation();
                  removeTab(tab.id);
                }}
                className="rounded-full p-1 hover:bg-muted cursor-pointer"
              >
                <X size={14} />
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        <Button
          variant="ghost"
          size="sm"
          className="p-0"
          onClick={addTab}
          disabled={tabs.length >= 5}
        >
          <Plus size={16} />
        </Button>
      </div>

      {tabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.id}>
     
        </TabsContent>
      ))}
    </Tabs>


*/

import { normalizeNodeId } from "platejs";

export const capeTownTravelTemplate = normalizeNodeId([
  {
    type: "h1",
    children: [{ text: "🌍 Cape Town Travel Planner" }],
  },

  {
    type: "p",
    children: [
      {
        text: "This template gives you one organised space to plan a full trip to ",
      },
      { bold: true, text: "Cape Town" },
      {
        text: ". It covers your trip overview, flights, accommodation, itinerary, transport, places to visit, food ideas, packing, safety, and spending plan. The goal is to keep everything in one document instead of spreading it across notes, screenshots, emails, and apps.",
      },
    ],
  },

  {
    type: "blockquote",
    children: [
      {
        type: "p",
        children: [
          {
            text: "✈️ Cape Town works best when your trip has enough structure to keep you organised, but enough flexibility to enjoy the city, the coast, and the weather when plans change.",
          },
        ],
      },
    ],
  },

  {
    type: "callout",
    children: [
      {
        type: "p",
        children: [
          { bold: true, text: "📌 Travel Focus: " },
          {
            text: "Scenic views, beaches, food, city exploration, mountain experiences, and a balanced week of activity and rest.",
          },
        ],
      },
    ],
  },

  {
    type: "img",
    url: "https://velvetescape.com/wp-content/uploads/2015/05/IMG_6420-1280x920.jpeg",
    children: [{ text: "" }],
  },

  {
    type: "toc",
    children: [{ text: "" }],
  },

  {
    type: "hr",
    children: [{ text: "" }],
  },

  {
    type: "toggle",
    children: [{ text: "📍 Trip Overview", bold: true, fontSize: "42px" }],
  },
  {
    type: "img",
    indent: 1,
    url: "https://www.capeconcierge.co.za/wp-content/uploads/2018/11/Cape-Concierge_Clifton-Beach-Accommodation.jpg",
    children: [{ text: "" }],
  },

  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Destination: " },
      { text: "Cape Town, South Africa" },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Travel Dates: " },
      { text: "15 December 2026 - 22 December 2026" },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Trip Style: " },
      { text: "Leisure, sightseeing, food, beach, and nature" },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Travelling With: " },
      { text: "Solo / Friends / Family" },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Main Goals: " },
      {
        text: "Visit iconic Cape Town spots, enjoy the coastline, eat well, explore the city properly, and keep the trip organised without making it too rigid.",
      },
    ],
  },

  {
    type: "toggle",
    children: [{ text: "🛫 Flights & Arrival", bold: true, fontSize: "42px" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Departure City: " },
      { text: "Johannesburg" },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Arrival Airport: " },
      { text: "Cape Town International Airport" },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Departure Flight: " },
      { text: "15 December 2026 - 08:15" },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Return Flight: " },
      { text: "22 December 2026 - 19:40" },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Airport Transfer Plan: " },
      { text: "Uber or pre-booked shuttle to accommodation" },
    ],
  },
  {
    type: "code_block",
    lang: "text",
    indent: 1,
    children: [
      {
        text: "Arrival Notes\n- Download boarding pass before leaving for the airport\n- Save accommodation address on your phone\n- Keep ID ready and easy to access\n- Have transport option ready before landing",
      },
    ],
  },

  {
    type: "toggle",
    children: [{ text: "🏨 Accommodation", bold: true, fontSize: "42px" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Area: " },
      { text: "Sea Point / Camps Bay / Waterfront / City Centre" },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Accommodation Name: " },
      { text: "Atlantic View Hotel Cape Town" },
    ],
  },
  {
    type: "img",
    indent: 1,
    url: " https://digital.ihg.com/is/image/ihg/intercontinental-cape-town-10980253053-2x1",
    children: [{ text: "" }],
  },

  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Check-in: " },
      { text: "15 December 2026 - 14:00" },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Check-out: " },
      { text: "22 December 2026 - 10:00" },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Why This Stay Works: " },
      {
        text: "It keeps you close to restaurants, ocean views, major tourist areas, and easier transport routes for daily exploring.",
      },
    ],
  },

  {
    type: "toggle",
    children: [
      { text: "🚗 Local Transport Plan", bold: true, fontSize: "42px" },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Primary Choice: " },
      { text: "Uber, rental car, or a mix of both" },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Why Planning Matters: " },
      {
        text: "Cape Town is spread out, so transport decisions affect how much you can do each day. Attractions are not always close together, especially when combining beaches, mountains, and scenic drives.",
      },
    ],
  },
  {
    type: "callout",
    indent: 1,
    children: [
      {
        type: "p",
        children: [
          {
            text: "🗺️ Save all your key locations in maps before the trip: accommodation, airport, restaurants, viewpoints, beaches, and backup spots.",
          },
        ],
      },
    ],
  },

  {
    type: "toggle",
    children: [
      { text: "📅 7-Day Cape Town Itinerary", bold: true, fontSize: "42px" },
    ],
  },

  {
    type: "h2",
    indent: 1,
    children: [{ text: "Day 1 - Arrival and Easy Waterfront Evening 🌆" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "Arrive in Cape Town, check into your accommodation, settle in properly, and keep the first day easy. A relaxed walk around the Waterfront or Sea Point works well because it lets you ease into the trip without overloading the day.",
      },
    ],
  },

  {
    type: "h2",
    indent: 1,
    children: [{ text: "Day 2 - Table Mountain and Central City ⛰️" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "Start early and aim for Table Mountain while conditions are still good. Later in the day, explore the city, take photos, stop for coffee or lunch, and keep the evening flexible depending on how long the mountain visit takes.",
      },
    ],
  },

  {
    type: "h2",
    indent: 1,
    children: [{ text: "Day 3 - Beach Day and Scenic Coast 🌊" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "Use this day for Camps Bay, Clifton, or Sea Point. It should feel lighter than the mountain day. The goal is to relax, enjoy the scenery, stop for good food, and have time for spontaneous breaks and photos.",
      },
    ],
  },

  {
    type: "h2",
    indent: 1,
    children: [{ text: "Day 4 - Peninsula Drive and Major Viewpoints 🚘" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "Plan a longer outing focused on scenic coastal driving, dramatic viewpoints, and major stops outside the immediate city centre. Keep buffer time because traffic, weather, and photo stops can easily stretch the day.",
      },
    ],
  },

  {
    type: "h2",
    indent: 1,
    children: [{ text: "Day 5 - Culture, Markets, and Food 🍽️" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "Dedicate a day to local culture and food. Visit markets, browse small shops, try cafés, and enjoy a more open and explorative day rather than a strict timetable.",
      },
    ],
  },

  {
    type: "h2",
    indent: 1,
    children: [{ text: "Day 6 - Flexible Day for Adventure or Wine 🍇" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "Keep this day adaptable. It can become a second beach day, a winery day, a hike, or time to revisit the place you liked most earlier in the week.",
      },
    ],
  },

  {
    type: "h2",
    indent: 1,
    children: [{ text: "Day 7 - Slow Morning and Departure 🧳" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "Use your final day for breakfast, last photos, calm packing, and getting to the airport without rushing. It is better to keep this day lighter than to squeeze too much into the final few hours.",
      },
    ],
  },

  {
    type: "toggle",
    children: [{ text: "📸 Must-Visit Spots", bold: true, fontSize: "42px" }],
  },
  {
    type: "p",
    indent: 1,
    children: [{ text: "Table Mountain" }],
  },
  {
    type: "p",
    indent: 1,
    children: [{ text: "V&A Waterfront" }],
  },
  {
    type: "p",
    indent: 1,
    children: [{ text: "Camps Bay" }],
  },
  {
    type: "p",
    indent: 1,
    children: [{ text: "Clifton Beaches" }],
  },
  {
    type: "p",
    indent: 1,
    children: [{ text: "Sea Point Promenade" }],
  },
  {
    type: "p",
    indent: 1,
    children: [{ text: "Bo-Kaap" }],
  },
  {
    type: "p",
    indent: 1,
    children: [{ text: "Signal Hill" }],
  },
  {
    type: "p",
    indent: 1,
    children: [{ text: "Cape Peninsula viewpoints" }],
  },
  {
    type: "p",
    indent: 1,
    children: [{ text: "Kirstenbosch area" }],
  },

  {
    type: "toggle",
    children: [{ text: "🍴 Food Plan", bold: true, fontSize: "42px" }],
  },
  {
    type: "h3",
    indent: 1,
    children: [{ text: "Breakfast Ideas ☕" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "Ocean-view cafés, hotel breakfast, bakery stops, and good coffee spots near your stay.",
      },
    ],
  },
  {
    type: "h3",
    indent: 1,
    children: [{ text: "Lunch Ideas 🥪" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "Casual cafés, beachside restaurants, market food, and quick stops between sightseeing.",
      },
    ],
  },
  {
    type: "h3",
    indent: 1,
    children: [{ text: "Dinner Ideas 🍽️" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "Sunset dinners, seafood spots, Waterfront dining, and one proper reservation for a special evening.",
      },
    ],
  },

  {
    type: "h2",
    children: [{ text: "🎒 Packing Checklist" }],
  },
  {
    type: "p",
    children: [
      {
        text: "Use this checklist to track everything you need before leaving for Cape Town.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "todo",
    checked: false,
    children: [{ text: "ID or passport" }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "todo",
    checked: false,
    children: [{ text: "Flight booking confirmation" }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "todo",
    checked: false,
    children: [{ text: "Accommodation booking details" }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "todo",
    checked: false,
    children: [{ text: "Light clothing for warm days" }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "todo",
    checked: false,
    children: [{ text: "Jacket or extra layer for cooler evenings and wind" }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "todo",
    checked: false,
    children: [{ text: "Comfortable walking shoes" }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "todo",
    checked: false,
    children: [{ text: "Beachwear" }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "todo",
    checked: false,
    children: [{ text: "Toiletries" }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "todo",
    checked: false,
    children: [{ text: "Phone charger" }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "todo",
    checked: false,
    children: [{ text: "Power bank" }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "todo",
    checked: false,
    children: [{ text: "Sunscreen and sunglasses" }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "todo",
    checked: false,
    children: [{ text: "Small day bag for outings" }],
  },

  {
    type: "h2",
    children: [{ text: "💸 Budget Planner" }],
  },
  {
    type: "p",
    children: [
      {
        text: "This table gives a realistic structure for planning your Cape Town travel spending.",
      },
    ],
  },
  {
    type: "table",
    children: [
      {
        type: "tr",
        children: [
          {
            type: "th",
            children: [{ text: "Category" }],
          },
          {
            type: "th",
            children: [{ text: "Estimated Cost" }],
          },
          {
            type: "th",
            children: [{ text: "Notes" }],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [{ text: "Flights" }],
          },
          {
            type: "td",
            children: [{ text: "R2,500 - R4,500" }],
          },
          {
            type: "td",
            children: [{ text: "Depends on booking time and airline" }],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [{ text: "Accommodation" }],
          },
          {
            type: "td",
            children: [{ text: "R7,000 - R18,000" }],
          },
          {
            type: "td",
            children: [{ text: "Varies by area, quality, and season" }],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [{ text: "Food" }],
          },
          {
            type: "td",
            children: [{ text: "R2,500 - R6,000" }],
          },
          {
            type: "td",
            children: [{ text: "Mix of casual meals and nicer dinners" }],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [{ text: "Transport" }],
          },
          {
            type: "td",
            children: [{ text: "R1,500 - R5,000" }],
          },
          {
            type: "td",
            children: [{ text: "Uber, fuel, parking, or rental car costs" }],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [{ text: "Activities" }],
          },
          {
            type: "td",
            children: [{ text: "R1,500 - R4,500" }],
          },
          {
            type: "td",
            children: [{ text: "Entry fees, tours, and optional experiences" }],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [{ text: "Shopping / Extras" }],
          },
          {
            type: "td",
            children: [{ text: "R1,000 - R3,000" }],
          },
          {
            type: "td",
            children: [{ text: "Souvenirs, snacks, and unplanned spending" }],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [{ text: "Emergency Buffer" }],
          },
          {
            type: "td",
            children: [{ text: "R2,000+" }],
          },
          {
            type: "td",
            children: [{ text: "Always keep backup money available" }],
          },
        ],
      },
    ],
  },

  {
    type: "callout",
    children: [
      {
        type: "p",
        children: [
          {
            text: "💡 Budget tip: build in extra room for weather changes, spontaneous outings, parking, cafés, and one or two premium experiences you may decide to do once you are there.",
          },
        ],
      },
    ],
  },

  {
    type: "h2",
    children: [{ text: "⚠️ Safety & Practical Notes" }],
  },
  {
    type: "p",
    children: [
      {
        text: "Stay alert in unfamiliar areas, avoid leaving valuables visible, keep your phone charged, and do not make rushed transport decisions late at night. Cape Town is amazing, but practical awareness still matters.",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        text: "Outdoor plans can change quickly because of wind and weather. Build enough flexibility into your itinerary so the trip still feels smooth even when one activity needs to move to another day.",
      },
    ],
  },

  {
    type: "hr",
    children: [{ text: "" }],
  },

  {
    type: "p",
    children: [
      { italic: true, text: "📝 Final note: " },
      {
        text: "A great Cape Town trip is not about doing everything. It is about choosing the right mix of scenery, food, exploration, and rest so the week feels memorable rather than rushed.",
      },
    ],
  },
]);

export const classNotesDemoTemplate = normalizeNodeId([
  {
    type: "h1",
    children: [
      {
        text: "🦠",
        fontSize: "68px",
      },
    ],
  },
  {
    type: "h1",
    children: [
      {
        text: "Intro to Cell Biology: Lecture 2",
        fontSize: "46px",
        // color: "#16a34a",
      },
    ],
  },

  {
    type: "hr",
    children: [{ text: "" }],
  },

  // Intro section
  {
    type: "h3",
    children: [{ bold: true, text: "Introduction: Why Biology?" }],
  },
  {
    type: "img",
    url: "https://s3-us-west-2.amazonaws.com/public.notion-static.com/1f88cc90-92fd-4ce4-bfcd-25daec2ffbbe/e29dfad0-d60b-4ca1-86ab-d862cdfb749a/Untitled.png",
    children: [{ text: "" }],
  },
  {
    type: "p",
    children: [
      {
        text: "Biology is the study of life and living organisms. It helps us understand how plants, animals, and humans function, grow, reproduce, and interact with their environments.",
      },
    ],
  },

  {
    type: "p",
    indent: 1,
    listStyleType: "disc",
    children: [{ text: "Main reasons biology is important:" }],
  },
  {
    type: "p",
    indent: 2,
    listStyleType: "circle",
    children: [{ text: "It helps us understand the human body." }],
  },
  {
    type: "p",
    indent: 2,
    listStyleType: "circle",
    children: [{ text: "It explains how plants and animals survive." }],
  },
  {
    type: "p",
    indent: 2,
    listStyleType: "circle",
    children: [{ text: "It helps us protect the environment and ecosystems." }],
  },

  {
    type: "h2",
    children: [{ text: "Key Cell Components" }],
  },

  // Ordered list
  {
    type: "p",
    listStyleType: "decimal",
    indent: 1,
    children: [
      { bold: true, text: "Cell Membrane: " },
      {
        text: "A lipid bilayer that separates the cell from its environment and controls the movement of substances in and out of the cell.",
      },
    ],
  },

  {
    type: "p",
    listStyleType: "decimal",
    indent: 1,
    children: [
      { bold: true, text: "Nucleus: " },
      { text: "The control center of the cell, housing DNA." },
    ],
  },

  {
    type: "p",
    listStyleType: "decimal",
    indent: 1,
    children: [
      { bold: true, text: "Mitochondria: " },
      {
        text: "The powerhouse of the cell, generating ATP through cellular respiration.",
      },
    ],
  },

  {
    type: "p",
    listStyleType: "decimal",
    indent: 1,
    children: [
      { bold: true, text: "Chloroplasts (in plants): " },
      {
        text: "The site of photosynthesis, converting sunlight into chemical energy.",
      },
    ],
  },

  {
    type: "p",
    listStyleType: "decimal",
    indent: 1,
    children: [
      { bold: true, text: "Endoplasmic Reticulum: " },
      { text: "Involved in protein and lipid synthesis." },
    ],
  },

  {
    type: "p",
    listStyleType: "decimal",
    indent: 1,
    children: [
      { bold: true, text: "Golgi Apparatus: " },
      { text: "Modifies, sorts, and packages proteins for secretion." },
    ],
  },

  // Characteristics of life
  {
    type: "h3",
    children: [{ bold: true, text: "Characteristics of Living Things" }],
  },
  {
    type: "p",
    children: [
      {
        text: "Living organisms share certain important features that distinguish them from non-living things.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "disc",
    children: [{ text: "Living things are made of cells." }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "disc",
    children: [{ text: "Living things grow and develop." }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "disc",
    children: [{ text: "Living things reproduce." }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "disc",
    children: [
      { text: "Living things respond to stimuli in their environment." },
    ],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "disc",
    children: [{ text: "Living things require energy." }],
  },

  // Levels of organization
  {
    type: "h3",
    children: [{ bold: true, text: "Levels of Biological Organisation" }],
  },
  {
    type: "p",
    children: [
      {
        text: "Biology studies life in an organised way, starting from the smallest building blocks and moving to more complex systems.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "decimal",
    children: [{ text: "Cell" }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "decimal",
    children: [{ text: "Tissue" }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "decimal",
    children: [{ text: "Organ" }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "decimal",
    children: [{ text: "Organ system" }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "decimal",
    children: [{ text: "Organism" }],
  },

  {
    type: "blockquote",
    children: [
      {
        type: "p",
        children: [
          {
            text: "Example: muscle cells form muscle tissue, muscle tissue helps form organs, and organs work together in organ systems.",
          },
        ],
      },
    ],
  },

  // Key vocabulary
  {
    type: "h3",
    children: [{ bold: true, text: "Key Vocabulary" }],
  },
  {
    type: "table",
    children: [
      {
        type: "tr",
        children: [
          {
            type: "th",
            children: [{ type: "p", children: [{ bold: true, text: "Term" }] }],
          },
          {
            type: "th",
            children: [
              { type: "p", children: [{ bold: true, text: "Meaning" }] },
            ],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [{ type: "p", children: [{ text: "Cell" }] }],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [{ text: "The basic unit of life." }],
              },
            ],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [{ type: "p", children: [{ text: "Organism" }] }],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "A living thing such as a plant, animal, or microbe.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [{ type: "p", children: [{ text: "Stimulus" }] }],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "A change in the environment that causes a response.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // Summary
  {
    type: "h3",
    children: [{ bold: true, text: "Lesson Summary" }],
  },
  {
    type: "p",
    children: [
      {
        text: "Biology helps us understand life, from cells to full organisms and ecosystems. Living things share common characteristics, and biological organisation helps us study life in a structured way.",
      },
    ],
  },

  // Review questions
  {
    type: "h3",
    children: [{ bold: true, text: "Review Questions" }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "decimal",
    children: [{ text: "What is biology?" }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "decimal",
    children: [{ text: "List three characteristics of living things." }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "decimal",
    children: [
      { text: "What is the difference between a tissue and an organ?" },
    ],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "decimal",
    children: [{ text: "Why is biology important in everyday life?" }],
  },
]);
export const probabilityStatsTemplate = normalizeNodeId([
  {
    type: "h1",
    children: [
      {
        text: "Probability and Statistics Notes",
        fontSize: "48px",
      },
    ],
  },
  {
    type: "h1",
    children: [{ bold: true, text: "🧮 Mathematical Statistics" }],
  },

  {
    type: "p",
    children: [
      { text: "Topic: " },
      {
        bold: true,
        text: "Random Variables, Distributions, Expectation, and Inference",
      },
    ],
  },

  {
    type: "h2",
    children: [{ text: "1. Foundations" }],
  },
  {
    type: "p",
    children: [
      {
        text: "Probability provides a formal framework for uncertainty. Statistics uses data to estimate, test, and infer properties of populations.",
      },
    ],
  },

  {
    type: "h2",
    children: [{ text: "2. Basic Probability Rules" }],
  },
  {
    type: "equation",
    texExpression: "P(A^c)=1-P(A)",
    children: [{ text: "" }],
  },
  {
    type: "equation",
    texExpression: "P(A\\cup B)=P(A)+P(B)-P(A\\cap B)",
    children: [{ text: "" }],
  },
  {
    type: "equation",
    texExpression: "P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}",
    children: [{ text: "" }],
  },

  {
    type: "h2",
    children: [{ text: "3. Bayes' Theorem" }],
  },
  {
    type: "equation",
    texExpression: "P(A\\mid B)=\\frac{P(B\\mid A)P(A)}{P(B)}",
    children: [{ text: "" }],
  },
  {
    type: "p",
    children: [
      {
        text: "Bayes' theorem updates prior belief using new evidence and is central in many statistical and machine learning settings.",
      },
    ],
  },

  {
    type: "h2",
    children: [{ text: "4. Random Variables" }],
  },
  {
    type: "p",
    children: [
      {
        text: "A random variable assigns a numerical value to each outcome in the sample space. It may be discrete or continuous.",
      },
    ],
  },

  {
    type: "h2",
    children: [{ text: "5. Expectation and Variance" }],
  },
  {
    type: "equation",
    texExpression: "E[X]=\\sum_x xP(X=x)",
    children: [{ text: "" }],
  },
  {
    type: "equation",
    texExpression: "E[X]=\\int_{-\\infty}^{\\infty} x f(x)\\,dx",
    children: [{ text: "" }],
  },
  {
    type: "equation",
    texExpression: "\\operatorname{Var}(X)=E[(X-E[X])^2]",
    children: [{ text: "" }],
  },

  {
    type: "h2",
    children: [{ text: "6. Common Distributions" }],
  },
  {
    type: "table",
    children: [
      {
        type: "tr",
        children: [
          {
            type: "th",
            children: [
              { type: "p", children: [{ bold: true, text: "Distribution" }] },
            ],
          },
          {
            type: "th",
            children: [
              {
                type: "p",
                children: [{ bold: true, text: "Formula / Notes" }],
              },
            ],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [{ type: "p", children: [{ text: "Bernoulli" }] }],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [{ text: "Single trial, success/failure." }],
              },
            ],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [{ type: "p", children: [{ text: "Binomial" }] }],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Number of successes in n independent Bernoulli trials.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [{ type: "p", children: [{ text: "Normal" }] }],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "Bell-shaped continuous distribution with mean μ and variance σ².",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    type: "h2",
    children: [{ text: "7. Normal Distribution" }],
  },
  {
    type: "equation",
    texExpression: "X\\sim N(\\mu,\\sigma^2)",
    children: [{ text: "" }],
  },
  {
    type: "equation",
    texExpression:
      "f(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}",
    children: [{ text: "" }],
  },

  {
    type: "h2",
    children: [{ text: "8. Standardisation" }],
  },
  {
    type: "equation",
    texExpression: "Z=\\frac{X-\\mu}{\\sigma}",
    children: [{ text: "" }],
  },

  {
    type: "h2",
    children: [{ text: "9. Sample Mean" }],
  },
  {
    type: "equation",
    texExpression: "\\bar{x}=\\frac{1}{n}\\sum_{i=1}^{n}x_i",
    children: [{ text: "" }],
  },

  {
    type: "h2",
    children: [{ text: "10. Confidence Intervals" }],
  },
  {
    type: "equation",
    texExpression: "\\bar{x} \\pm z_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}}",
    children: [{ text: "" }],
  },

  {
    type: "h2",
    children: [{ text: "11. Hypothesis Testing" }],
  },
  {
    type: "blockquote",
    children: [
      {
        type: "p",
        children: [
          {
            text: "Always state the null hypothesis, alternative hypothesis, test statistic, significance level, and conclusion in words.",
          },
        ],
      },
    ],
  },

  {
    type: "h2",
    children: [{ text: "12. Worked Example" }],
  },
  {
    type: "p",
    children: [
      {
        text: "If a fair die is rolled once, the expected value is:",
      },
    ],
  },
  {
    type: "equation",
    texExpression: "E[X]=\\frac{1+2+3+4+5+6}{6}=3.5",
    children: [{ text: "" }],
  },

  {
    type: "h2",
    children: [{ text: "13. Common Mistakes" }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "disc",
    children: [
      { text: "Confusing mutually exclusive with independent events." },
    ],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "disc",
    children: [
      {
        text: "Treating p-values as the probability that the null hypothesis is true.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "disc",
    children: [
      { text: "Using the wrong distributional assumptions for the data." },
    ],
  },

  {
    type: "toc",
    children: [{ text: "" }],
  },
]);
export const weeklyTodoTemplate = normalizeNodeId([
  {
    type: "h1",
    children: [{ text: "🗓 Weekly To-Do List" }],
  },

  {
    type: "table",
    children: [
      {
        type: "tr",
        children: [
          {
            type: "th",
            children: [
              { type: "p", children: [{ bold: true, text: "Monday" }] },
            ],
          },
          {
            type: "th",
            children: [
              { type: "p", children: [{ bold: true, text: "Tuesday" }] },
            ],
          },
          {
            type: "th",
            children: [
              { type: "p", children: [{ bold: true, text: "Wednesday" }] },
            ],
          },
          {
            type: "th",
            children: [
              { type: "p", children: [{ bold: true, text: "Thursday" }] },
            ],
          },
          {
            type: "th",
            children: [
              { type: "p", children: [{ bold: true, text: "Friday" }] },
            ],
          },
        ],
      },

      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Plan weekly goals" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Review notes" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Work on assignment" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Prepare questions" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Weekly review" }],
              },
            ],
          },
        ],
      },

      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Check email" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Attend class" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Read chapter" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Finish task draft" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Submit outstanding work" }],
              },
            ],
          },
        ],
      },

      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Organise files" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Complete exercises" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Revise key terms" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Meet with group" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Clean up notes" }],
              },
            ],
          },
        ],
      },

      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Set priorities" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Review feedback" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Study examples" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Update progress" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Plan next week" }],
              },
            ],
          },
        ],
      },

      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Start project section" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Watch lesson recap" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Practice problems" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Refine solution" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Archive finished tasks" }],
              },
            ],
          },
        ],
      },

      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Review calendar" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Draft summary" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Continue revision" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Check dependencies" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Reflect on progress" }],
              },
            ],
          },
        ],
      },

      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "List main tasks" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Complete reading" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Summarise chapter" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Review checklist" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Wrap up admin" }],
              },
            ],
          },
        ],
      },

      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Prepare materials" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Ask for help if stuck" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Complete exercises set" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Polish draft" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Check what is left" }],
              },
            ],
          },
        ],
      },

      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Review objectives" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Continue assignment" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Revise difficult parts" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Prepare submission" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Review achievements" }],
              },
            ],
          },
        ],
      },

      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Start strong" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Stay consistent" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Midweek check-in" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "Finish important items" }],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                indent: 1,
                listStyleType: "todo",
                checked: false,
                children: [{ text: "End week well" }],
              },
            ],
          },
        ],
      },
    ],
  },
]);
export const linearAlgebraTemplate = normalizeNodeId([
  {
    type: "h1",
    children: [{ text: "Linear Algebra Notes" }],
  },
  {
    type: "p",
    children: [
      { text: "Topic: " },
      {
        bold: true,
        text: "Vectors, Matrices, Linear Transformations, and Eigenvalues",
      },
    ],
  },
  {
    type: "toc",
    children: [{ text: "" }],
  },

  {
    type: "h2",
    children: [{ text: "1. Overview" }],
  },
  {
    type: "p",
    children: [
      {
        text: "This page is for storing definitions, matrix operations, geometric intuition, proofs, and worked examples. Emphasise both the algebraic procedure and the geometric meaning.",
      },
    ],
  },

  {
    type: "h2",
    children: [{ text: "2. Vectors" }],
  },
  {
    type: "p",
    children: [
      {
        text: "A vector can be understood as an ordered list of numbers, a point in space, or a direction with magnitude depending on context.",
      },
    ],
  },
  {
    type: "equation",
    texExpression:
      "\\mathbf{v}=\\begin{bmatrix}v_1\\\\v_2\\\\v_3\\end{bmatrix}",
    children: [{ text: "" }],
  },

  {
    type: "h2",
    children: [{ text: "3. Dot Product" }],
  },
  {
    type: "equation",
    texExpression: "\\mathbf{u}\\cdot\\mathbf{v}=u_1v_1+u_2v_2+\\cdots+u_nv_n",
    children: [{ text: "" }],
  },
  {
    type: "equation",
    texExpression:
      "\\mathbf{u}\\cdot\\mathbf{v}=\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|\\cos\\theta",
    children: [{ text: "" }],
  },
  {
    type: "p",
    children: [
      {
        text: "The dot product is useful for checking orthogonality, projections, and angles between vectors.",
      },
    ],
  },

  {
    type: "h2",
    children: [{ text: "4. Matrices" }],
  },
  {
    type: "equation",
    texExpression:
      "A=\\begin{bmatrix}a_{11}&a_{12}\\\\a_{21}&a_{22}\\end{bmatrix}",
    children: [{ text: "" }],
  },
  {
    type: "p",
    children: [
      {
        text: "Matrices can represent systems of equations, transformations, and data structures. They should not be viewed only as arrays of numbers but as operators on vectors.",
      },
    ],
  },

  {
    type: "h2",
    children: [{ text: "5. Matrix Multiplication" }],
  },
  {
    type: "equation",
    texExpression: "(AB)_{ij} = \\sum_{k=1}^{n} a_{ik}b_{kj}",
    children: [{ text: "" }],
  },

  {
    type: "h2",
    children: [{ text: "6. Determinant" }],
  },
  {
    type: "equation",
    texExpression: "\\det\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}=ad-bc",
    children: [{ text: "" }],
  },
  {
    type: "p",
    children: [
      {
        text: "The determinant indicates whether a matrix is invertible and gives geometric information about area or volume scaling.",
      },
    ],
  },

  {
    type: "h2",
    children: [{ text: "7. Inverse Matrix" }],
  },
  {
    type: "equation",
    texExpression:
      "A^{-1} = \\frac{1}{ad-bc}\\begin{bmatrix}d&-b\\\\-c&a\\end{bmatrix}",
    children: [{ text: "" }],
  },

  {
    type: "h2",
    children: [{ text: "8. Systems of Linear Equations" }],
  },
  {
    type: "equation",
    texExpression: "A\\mathbf{x}=\\mathbf{b}",
    children: [{ text: "" }],
  },
  {
    type: "p",
    children: [
      {
        text: "To solve a linear system, row reduction is often more stable conceptually than jumping directly to formulas.",
      },
    ],
  },

  {
    type: "h2",
    children: [{ text: "9. Eigenvalues and Eigenvectors" }],
  },
  {
    type: "equation",
    texExpression: "A\\mathbf{v}=\\lambda \\mathbf{v}",
    children: [{ text: "" }],
  },
  {
    type: "equation",
    texExpression: "\\det(A-\\lambda I)=0",
    children: [{ text: "" }],
  },
  {
    type: "blockquote",
    children: [
      {
        type: "p",
        children: [
          {
            text: "Eigenvectors are directions that remain unchanged in direction under a linear transformation. Eigenvalues tell us how much scaling occurs along those directions.",
          },
        ],
      },
    ],
  },

  {
    type: "h2",
    children: [{ text: "10. Worked Example" }],
  },
  {
    type: "p",
    children: [
      { text: "Find the determinant of " },
      { code: true, text: "A = [[2,1],[3,4]]" },
      { text: "." },
    ],
  },
  {
    type: "equation",
    texExpression: "\\det(A)=2\\cdot4-1\\cdot3=5",
    children: [{ text: "" }],
  },

  {
    type: "h2",
    children: [{ text: "11. Concept Table" }],
  },
  {
    type: "table",
    children: [
      {
        type: "tr",
        children: [
          {
            type: "th",
            children: [
              { type: "p", children: [{ bold: true, text: "Concept" }] },
            ],
          },
          {
            type: "th",
            children: [
              { type: "p", children: [{ bold: true, text: "Meaning" }] },
            ],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [{ type: "p", children: [{ text: "Span" }] }],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  { text: "All linear combinations of a set of vectors." },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [{ type: "p", children: [{ text: "Basis" }] }],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [{ text: "A linearly independent spanning set." }],
              },
            ],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [{ type: "p", children: [{ text: "Rank" }] }],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  { text: "Dimension of the column space or row space." },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    type: "h2",
    children: [{ text: "12. Practice" }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "decimal",
    children: [{ text: "Compute the inverse of a 2×2 matrix." }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "decimal",
    children: [{ text: "Find the eigenvalues of a simple diagonal matrix." }],
  },
  {
    type: "p",
    indent: 1,
    listStyleType: "decimal",
    children: [{ text: "Row reduce a 3×3 system to echelon form." }],
  },
]);
export const javaCollectionsTemplate = normalizeNodeId([
  {
    type: "h1",
    children: [{ text: "Java Collections Framework" }],
  },

  {
    type: "p",
    children: [
      {
        text: "The Java Collections Framework, often shortened to JCF, is a standard library framework used to store, organise, access, and manipulate groups of objects in Java. Instead of building your own data structures from scratch every time, Java provides a consistent set of ",
      },
      { bold: true, text: "interfaces" },
      {
        text: ", such as ",
      },
      { code: true, text: "List" },
      { text: ", " },
      { code: true, text: "Set" },
      { text: ", " },
      { code: true, text: "Queue" },
      { text: ", " },
      { code: true, text: "Deque" },
      { text: ", and " },
      { code: true, text: "Map" },
      {
        text: ", together with ready-made ",
      },
      { bold: true, text: "implementation classes" },
      {
        text: " such as ",
      },
      { code: true, text: "ArrayList" },
      { text: ", " },
      { code: true, text: "HashSet" },
      { text: ", " },
      { code: true, text: "PriorityQueue" },
      { text: ", and " },
      { code: true, text: "HashMap" },
      {
        text: ". The main goal of the framework is to give developers reusable, well-tested ways of handling collections of data while keeping code cleaner, more efficient, and easier to maintain.",
      },
    ],
  },

  {
    type: "p",
    children: [
      { bold: true, text: "What it helps you achieve: " },
      {
        text: "store data in order, prevent duplicates where necessary, process items in queue-like structures, and map keys to values efficiently.",
      },
    ],
  },

  {
    type: "blockquote",
    children: [
      {
        type: "p",
        children: [
          {
            text: "💡 A simple way to think about it: the framework gives you a toolbox of data structures, and each one is designed for a different job.",
          },
        ],
      },
    ],
  },

  {
    type: "toc",
    children: [{ text: "" }],
  },

  {
    type: "hr",
    children: [{ text: "" }],
  },

  {
    type: "toggle",
    children: [
      { text: "📦 The Collection Interface", bold: true, fontSize: 42 },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "The ",
      },
      { code: true, text: "Collection" },
      {
        text: " interface is the root interface for most collection types in the framework, except ",
      },
      { code: true, text: "Map" },
      {
        text: ". It defines the common behaviour shared by structures such as lists, sets, and queues. Through it, Java provides core operations like adding elements, removing elements, checking whether an element exists, testing whether the collection is empty, and finding the number of stored elements.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Key idea: " },
      {
        text: "it represents a general group of objects and acts as the parent abstraction for many other collection interfaces.",
      },
    ],
  },
  {
    type: "code_block",
    lang: "java",
    indent: 1,
    children: [
      {
        text: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Collection<String> items = new ArrayList<>();\n        items.add("Book");\n        items.add("Pen");\n        items.add("Notebook");\n\n        System.out.println(items);\n        System.out.println("Size: " + items.size());\n        System.out.println("Contains Pen? " + items.contains("Pen"));\n    }\n}',
      },
    ],
  },

  {
    type: "toggle",
    children: [{ text: "📝 The List Interface", bold: true, fontSize: 42 }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "A ",
      },
      { code: true, text: "List" },
      {
        text: " is an ordered collection. This means elements are stored in the order they are inserted, and each element has an index position. Lists also allow duplicate values, so the same element can appear more than once.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Use a List when: " },
      {
        text: "order matters, duplicates are allowed, and you need positional access using an index.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Common implementations: " },
      { code: true, text: "ArrayList" },
      { text: ", " },
      { code: true, text: "LinkedList" },
      { text: ", and " },
      { code: true, text: "Vector" },
      { text: "." },
    ],
  },
  {
    type: "h2",
    indent: 1,
    children: [{ text: "ArrayList" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "The ",
      },
      { code: true, text: "ArrayList" },
      {
        text: " is backed by a dynamic array. It is one of the most used list implementations because it gives fast access by index and is simple to use. It grows automatically as elements are added.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Best for: " },
      {
        text: "reading elements often, storing ordered data, and general-purpose list usage.",
      },
    ],
  },
  {
    type: "code_block",
    lang: "java",
    indent: 1,
    children: [
      {
        text: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<String> modules = new ArrayList<>();\n        modules.add("Math");\n        modules.add("Physics");\n        modules.add("Math");\n\n        System.out.println(modules);\n        System.out.println(modules.get(1));\n\n        modules.set(0, "Chemistry");\n        System.out.println(modules);\n    }\n}',
      },
    ],
  },
  {
    type: "h2",
    indent: 1,
    children: [{ text: "LinkedList" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "The ",
      },
      { code: true, text: "LinkedList" },
      {
        text: " stores elements as connected nodes rather than in a resizing array. It is useful when insertions and deletions happen frequently, especially near the beginning or end of the structure. It also implements ",
      },
      { code: true, text: "Deque" },
      {
        text: ", which makes it more flexible than just being a list.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Best for: " },
      {
        text: "frequent insertions and removals, and cases where the structure may also be used like a queue or deque.",
      },
    ],
  },
  {
    type: "code_block",
    lang: "java",
    indent: 1,
    children: [
      {
        text: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        LinkedList<String> cities = new LinkedList<>();\n        cities.add("Pretoria");\n        cities.add("Cape Town");\n        cities.addFirst("Johannesburg");\n        cities.addLast("Durban");\n\n        System.out.println(cities);\n        System.out.println("First: " + cities.getFirst());\n        System.out.println("Last: " + cities.getLast());\n    }\n}',
      },
    ],
  },
  {
    type: "h2",
    indent: 1,
    children: [{ text: "Vector" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "The ",
      },
      { code: true, text: "Vector" },
      {
        text: " class is an older list implementation that is synchronized. It behaves similarly to ",
      },
      { code: true, text: "ArrayList" },
      {
        text: ", but it is generally used less often in modern Java code.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { italic: true, text: "Note: " },
      {
        text: "you should know it exists, but in most modern code ",
      },
      { code: true, text: "ArrayList" },
      { text: " is the more common choice." },
    ],
  },

  {
    type: "toggle",
    children: [{ text: "🧩 The Set Interface", bold: true, fontSize: 42 }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "A ",
      },
      { code: true, text: "Set" },
      {
        text: " is a collection that does not allow duplicates. If the same value is added multiple times, only one copy is kept. This makes sets very useful when uniqueness matters.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Use a Set when: " },
      {
        text: "you want unique elements and do not want duplicate data in the collection.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Common implementations: " },
      { code: true, text: "HashSet" },
      { text: ", " },
      { code: true, text: "LinkedHashSet" },
      { text: ", and " },
      { code: true, text: "TreeSet" },
      { text: "." },
    ],
  },
  {
    type: "h2",
    indent: 1,
    children: [{ text: "HashSet" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "A ",
      },
      { code: true, text: "HashSet" },
      {
        text: " stores unique elements using hashing. It is usually very fast for adding, removing, and checking whether an element exists. However, it does not preserve insertion order.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Best for: " },
      {
        text: "fast uniqueness checks when element order does not matter.",
      },
    ],
  },
  {
    type: "code_block",
    lang: "java",
    indent: 1,
    children: [
      {
        text: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Set<String> usernames = new HashSet<>();\n        usernames.add("quincy");\n        usernames.add("alex");\n        usernames.add("quincy");\n\n        System.out.println(usernames);\n        System.out.println("Contains alex? " + usernames.contains("alex"));\n    }\n}',
      },
    ],
  },
  {
    type: "h2",
    indent: 1,
    children: [{ text: "LinkedHashSet" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "A ",
      },
      { code: true, text: "LinkedHashSet" },
      {
        text: " is similar to a ",
      },
      { code: true, text: "HashSet" },
      {
        text: ", but it also preserves insertion order. This means you still get uniqueness, but when iterating through the set the items come out in the order they were added.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Best for: " },
      {
        text: "unique elements when predictable iteration order is also needed.",
      },
    ],
  },
  {
    type: "code_block",
    lang: "java",
    indent: 1,
    children: [
      {
        text: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Set<String> steps = new LinkedHashSet<>();\n        steps.add("Design");\n        steps.add("Build");\n        steps.add("Test");\n        steps.add("Build");\n\n        System.out.println(steps);\n    }\n}',
      },
    ],
  },
  {
    type: "h2",
    indent: 1,
    children: [{ text: "TreeSet" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "A ",
      },
      { code: true, text: "TreeSet" },
      {
        text: " stores unique elements in sorted order. Instead of focusing on insertion order, it focuses on automatically ordering the elements according to their natural order or a comparator.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Best for: " },
      {
        text: "unique values that must remain sorted.",
      },
    ],
  },
  {
    type: "code_block",
    lang: "java",
    indent: 1,
    children: [
      {
        text: "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Set<Integer> marks = new TreeSet<>();\n        marks.add(70);\n        marks.add(55);\n        marks.add(90);\n        marks.add(70);\n\n        System.out.println(marks);\n    }\n}",
      },
    ],
  },

  {
    type: "toggle",
    children: [{ text: "🚚 The Queue Interface", bold: true, fontSize: 42 }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "A ",
      },
      { code: true, text: "Queue" },
      {
        text: " is used to hold elements before they are processed. A queue usually follows the FIFO rule, meaning ",
      },
      { bold: true, text: "first in, first out" },
      {
        text: ". The first element inserted is usually the first one removed.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Use a Queue when: " },
      {
        text: "tasks, jobs, or requests must be processed in arrival order or in a controlled processing sequence.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Common implementations: " },
      { code: true, text: "LinkedList" },
      { text: " and " },
      { code: true, text: "PriorityQueue" },
      { text: "." },
    ],
  },
  {
    type: "h2",
    indent: 1,
    children: [{ text: "LinkedList as a Queue" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "Because ",
      },
      { code: true, text: "LinkedList" },
      {
        text: " implements the ",
      },
      { code: true, text: "Queue" },
      {
        text: " interface, it can be used in queue-style operations using methods such as ",
      },
      { code: true, text: "offer()" },
      { text: ", " },
      { code: true, text: "poll()" },
      { text: ", and " },
      { code: true, text: "peek()" },
      { text: "." },
    ],
  },
  {
    type: "code_block",
    lang: "java",
    indent: 1,
    children: [
      {
        text: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Queue<String> jobs = new LinkedList<>();\n        jobs.offer("Print Report");\n        jobs.offer("Send Email");\n        jobs.offer("Backup Data");\n\n        System.out.println(jobs);\n        System.out.println("Next job: " + jobs.peek());\n        System.out.println("Processed: " + jobs.poll());\n        System.out.println(jobs);\n    }\n}',
      },
    ],
  },
  {
    type: "h2",
    indent: 1,
    children: [{ text: "PriorityQueue" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "A ",
      },
      { code: true, text: "PriorityQueue" },
      {
        text: " does not mainly care about insertion order. Instead, it serves elements according to priority. By default, Java orders elements so that the smallest comes out first.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Best for: " },
      {
        text: "situations where items must be processed by importance, rank, or smallest or largest value.",
      },
    ],
  },
  {
    type: "code_block",
    lang: "java",
    indent: 1,
    children: [
      {
        text: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Queue<Integer> pq = new PriorityQueue<>();\n        pq.offer(40);\n        pq.offer(10);\n        pq.offer(30);\n        pq.offer(20);\n\n        System.out.println("Peek: " + pq.peek());\n        System.out.println("Poll: " + pq.poll());\n        System.out.println("After poll: " + pq);\n    }\n}',
      },
    ],
  },

  {
    type: "toggle",
    children: [{ text: "↔️ The Deque Interface", bold: true, fontSize: 42 }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "A ",
      },
      { code: true, text: "Deque" },
      {
        text: " is a double-ended queue. This means elements can be added or removed from both the front and the back. It is more flexible than a normal queue because it can behave like both a queue and a stack.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Use a Deque when: " },
      {
        text: "you need operations at both ends of the structure or want stack-like and queue-like behaviour in one abstraction.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Common implementations: " },
      { code: true, text: "ArrayDeque" },
      { text: " and " },
      { code: true, text: "LinkedList" },
      { text: "." },
    ],
  },
  {
    type: "h2",
    indent: 1,
    children: [{ text: "ArrayDeque" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "The ",
      },
      { code: true, text: "ArrayDeque" },
      {
        text: " is a resizable-array implementation of ",
      },
      { code: true, text: "Deque" },
      {
        text: ". It is efficient and commonly used when you want a stack or double-ended queue without using the older ",
      },
      { code: true, text: "Stack" },
      { text: " class." },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Best for: " },
      {
        text: "fast front and back operations, stack behaviour, and queue behaviour.",
      },
    ],
  },
  {
    type: "code_block",
    lang: "java",
    indent: 1,
    children: [
      {
        text: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Deque<String> deque = new ArrayDeque<>();\n        deque.addFirst("B");\n        deque.addFirst("A");\n        deque.addLast("C");\n        deque.addLast("D");\n\n        System.out.println(deque);\n        System.out.println("Remove first: " + deque.removeFirst());\n        System.out.println("Remove last: " + deque.removeLast());\n        System.out.println(deque);\n    }\n}',
      },
    ],
  },
  {
    type: "h2",
    indent: 1,
    children: [{ text: "LinkedList as a Deque" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "Since ",
      },
      { code: true, text: "LinkedList" },
      {
        text: " also implements ",
      },
      { code: true, text: "Deque" },
      {
        text: ", it can be used for double-ended queue operations as well.",
      },
    ],
  },

  {
    type: "toggle",
    children: [{ text: "🗂️ The Map Interface", bold: true, fontSize: 42 }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "A ",
      },
      { code: true, text: "Map" },
      {
        text: " stores data as key-value pairs. Each key is unique and maps to a value. Unlike lists, sets, and queues, a map is not concerned with storing standalone values in a sequence. Instead, it is concerned with efficient lookup through keys.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Use a Map when: " },
      {
        text: "you need to associate one piece of data with another, such as student number to student name or product code to price.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Common implementations: " },
      { code: true, text: "HashMap" },
      { text: ", " },
      { code: true, text: "LinkedHashMap" },
      { text: ", and " },
      { code: true, text: "TreeMap" },
      { text: "." },
    ],
  },
  {
    type: "h2",
    indent: 1,
    children: [{ text: "HashMap" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "A ",
      },
      { code: true, text: "HashMap" },
      {
        text: " uses hashing to store key-value pairs. It is one of the most commonly used map implementations because it gives fast average-time retrieval, insertion, and removal.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Best for: " },
      {
        text: "fast key-based lookup when ordering is not important.",
      },
    ],
  },
  {
    type: "code_block",
    lang: "java",
    indent: 1,
    children: [
      {
        text: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<Integer, String> students = new HashMap<>();\n        students.put(101, "Alice");\n        students.put(102, "Bob");\n        students.put(103, "Charlie");\n\n        System.out.println(students);\n        System.out.println(students.get(102));\n    }\n}',
      },
    ],
  },
  {
    type: "h2",
    indent: 1,
    children: [{ text: "LinkedHashMap" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "A ",
      },
      { code: true, text: "LinkedHashMap" },
      {
        text: " works like a ",
      },
      { code: true, text: "HashMap" },
      {
        text: ", but it preserves insertion order. This makes it useful when you still want hash-based performance but need the entries to come out in a predictable order.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Best for: " },
      {
        text: "maps that require both fast lookup and stable iteration order.",
      },
    ],
  },
  {
    type: "code_block",
    lang: "java",
    indent: 1,
    children: [
      {
        text: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<String, Integer> stock = new LinkedHashMap<>();\n        stock.put("Laptop", 5);\n        stock.put("Phone", 8);\n        stock.put("Tablet", 3);\n\n        System.out.println(stock);\n    }\n}',
      },
    ],
  },
  {
    type: "h2",
    indent: 1,
    children: [{ text: "TreeMap" }],
  },
  {
    type: "p",
    indent: 1,
    children: [
      {
        text: "A ",
      },
      { code: true, text: "TreeMap" },
      {
        text: " stores entries in sorted key order. Instead of preserving insertion order, it ensures that keys are always arranged according to natural ordering or a comparator.",
      },
    ],
  },
  {
    type: "p",
    indent: 1,
    children: [
      { bold: true, text: "Best for: " },
      {
        text: "maps where the keys must remain sorted.",
      },
    ],
  },
  {
    type: "code_block",
    lang: "java",
    indent: 1,
    children: [
      {
        text: 'import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Map<Integer, String> positions = new TreeMap<>();\n        positions.put(3, "Third");\n        positions.put(1, "First");\n        positions.put(2, "Second");\n\n        System.out.println(positions);\n    }\n}',
      },
    ],
  },
]);

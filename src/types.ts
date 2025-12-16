export interface Feature {
  included: boolean;
  display_text?: string; // Short text for cards (e.g., "Unified Workspace")
  limit?: string | number; // e.g., "500/mo"
  tooltip?: string; // Hover text for extra context
  
  // NEW: Enterprise Grading fields
  tier?: "basic" | "standard" | "advanced" | "enterprise"; 
  rating?: number; // 1-5 score for this specific feature's quality
  details?: string[]; // Bullet points for a deep-dive modal (e.g., ["Scheduled Exports", "SQL Access"])
}

export interface Plan {
  id: string;
  brand_name: string;
  plan_name: string;
  brand_color?: string;
  official_url: string;
  last_updated: string;
  pricing: {
    cost_per_agent: number;
    currency: string;
    period: "monthly" | "annual";
    model: "per_agent" | "per_seat" | "flat_fee" | "per_user";
  };
  constraints: {
    ticket_limit?: number | string;
    min_seats?: number;
    max_seats?: number;
    tooltip?: string;
  };
  channels: {
    voice: Feature;
    chat: Feature;
    social: Feature;
  };
  features: {
    email_ticketing: Feature;
    automation: Feature;
    sla_management: Feature;
    knowledge_base: Feature;
    reporting: Feature;
    ai_features: Feature;
  };
  integrations: {
    salesforce: Feature;
    jira: Feature;
    shopify: Feature;
  };
}
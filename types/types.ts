export interface Contact {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: "new" | "contacted" | "qualified" | "proposal" | "won" | "lost";
  createdAt: string;
  source?: string;
  rep?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: "today" | "upcoming" | "completed";
  dueDate: string;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  sender: string;
  recipient: string;
  message: string;
  timestamp: string;
  isGroup: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  online: boolean;
}

export interface CallLog {
  id: string;
  contactId: string;
  contactName: string;
  duration: number;
  outcome: "connected" | "voicemail" | "no-answer" | "busy";
  notes: string;
  followUpRequired: boolean;
  followUpDate?: string;
  createdAt: string;
  createdBy: string;
}

export interface Email {
  id: string;
  contactId: string;
  contactName: string;
  contactEmail: string;
  subject: string;
  body: string;
  status: "draft" | "sent" | "delivered" | "opened" | "replied";
  sentAt?: string;
  createdAt: string;
  createdBy: string;
  templateUsed?: string;
}

export interface Meeting {
  id: string;
  contactId: string;
  contactName: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  meetingType: "in-person" | "video" | "phone";
  status: "scheduled" | "completed" | "cancelled" | "rescheduled";
  attendees: string[];
  notes?: string;
  createdAt: string;
  createdBy: string;
}

export interface Proposal {
  id: string;
  contactId: string;
  contactName: string;
  title: string;
  description: string;
  amount: number;
  currency: string;
  status: "draft" | "sent" | "viewed" | "accepted" | "rejected" | "expired";
  validUntil: string;
  items: ProposalItem[];
  terms: string;
  createdAt: string;
  createdBy: string;
  sentAt?: string;
}

export interface ProposalItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

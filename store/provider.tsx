"use client";

import type React from "react";
import { useState, useEffect, useContext, createContext } from "react";
import {
  Contact,
  Task,
  ChatMessage,
  TeamMember,
  CallLog,
  Email,
  Meeting,
  Proposal,
} from "@/types/types";
import teamMembersArray from "@/lib/constants/teamMembers";
import sampleContactsArray from "@/lib/constants/sampleContacts";
import sampleTaskArray from "@/lib/constants/sampleTask";

interface CRMContextType {
  contacts: Contact[];
  tasks: Task[];
  messages: ChatMessage[];
  teamMembers: TeamMember[];
  callLogs: CallLog[];
  emails: Email[];
  meetings: Meeting[];
  proposals: Proposal[];
  addContact: (contact: Omit<Contact, "id" | "createdAt">) => void;
  updateContact: (id: string, contact: Partial<Contact>) => void;
  deleteContact: (id: string) => void;
  addTask: (task: Omit<Task, "id" | "createdAt">) => void;
  updateTask: (id: string, task: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  addMessage: (message: Omit<ChatMessage, "id" | "timestamp">) => void;
  updateContactStatus: (id: string, status: Contact["status"]) => void;
  addCallLog: (callLog: Omit<CallLog, "id" | "createdAt">) => void;
  addEmail: (email: Omit<Email, "id" | "createdAt">) => void;
  updateEmail: (id: string, email: Partial<Email>) => void;
  addMeeting: (meeting: Omit<Meeting, "id" | "createdAt">) => void;
  updateMeeting: (id: string, meeting: Partial<Meeting>) => void;
  addProposal: (proposal: Omit<Proposal, "id" | "createdAt">) => void;
  updateProposal: (id: string, proposal: Partial<Proposal>) => void;
  updateCallLog: (id: string, callLog: Partial<CallLog>) => void;
}

const CRMContext = createContext<CRMContextType | undefined>(undefined);

/**
 * Synchronously retrieves initial data from localStorage.
 * Using a helper function outside the component keeps the logic clean
 * and ensures we have the data ready before the first render.
 */
const getInitialData = <T,>(key: string, defaultValue: T): T => {
  if (typeof window === "undefined") return defaultValue;
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  } catch (error) {
    console.error(`Error loading ${key} from localStorage:`, error);
    return defaultValue;
  }
};

export function useCRM() {
  const context = useContext(CRMContext);
  if (!context) {
    throw new Error("useCRM must be used within a CRMProvider");
  }
  return context;
}

export function CRMProvider({ children }: { children: React.ReactNode }) {
  /* PERFORMANCE OPTIMIZATION: "Lazy Initialization"
    We pass a function to useState instead of a direct value. 
    This ensures localStorage is only read once during the initial mount.
    It prevents "cascading renders" and UI flickering that happens when 
    setting state inside a useEffect after the first paint.
  */
  const [contacts, setContacts] = useState<Contact[]>(() =>
    getInitialData("crm-contacts", sampleContactsArray),
  );
  const [tasks, setTasks] = useState<Task[]>(() =>
    getInitialData("crm-tasks", sampleTaskArray),
  );
  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    getInitialData("crm-messages", []),
  );
  const [callLogs, setCallLogs] = useState<CallLog[]>(() =>
    getInitialData("crm-call-logs", []),
  );
  const [emails, setEmails] = useState<Email[]>(() =>
    getInitialData("crm-emails", []),
  );
  const [meetings, setMeetings] = useState<Meeting[]>(() =>
    getInitialData("crm-meetings", []),
  );
  const [proposals, setProposals] = useState<Proposal[]>(() =>
    getInitialData("crm-proposals", []),
  );
  const [teamMembers] = useState<TeamMember[]>(teamMembersArray);

  // 2. استخدام useEffect فقط لحفظ التغييرات عند حدوثها
  useEffect(() => {
    localStorage.setItem("crm-contacts", JSON.stringify(contacts));
  }, [contacts]);
  useEffect(() => {
    localStorage.setItem("crm-tasks", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    localStorage.setItem("crm-messages", JSON.stringify(messages));
  }, [messages]);
  useEffect(() => {
    localStorage.setItem("crm-call-logs", JSON.stringify(callLogs));
  }, [callLogs]);
  useEffect(() => {
    localStorage.setItem("crm-emails", JSON.stringify(emails));
  }, [emails]);
  useEffect(() => {
    localStorage.setItem("crm-meetings", JSON.stringify(meetings));
  }, [meetings]);
  useEffect(() => {
    localStorage.setItem("crm-proposals", JSON.stringify(proposals));
  }, [proposals]);

  // --- دوال التحديث (Actions) ---

  const addContact = (contactData: Omit<Contact, "id" | "createdAt">) => {
    const newContact: Contact = {
      ...contactData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setContacts((prev) => [...prev, newContact]);
  };

  const updateContact = (id: string, contactData: Partial<Contact>) => {
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === id ? { ...contact, ...contactData } : contact,
      ),
    );
  };

  const deleteContact = (id: string) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const addTask = (taskData: Omit<Task, "id" | "createdAt">) => {
    const newTask: Task = {
      ...taskData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const updateTask = (id: string, taskData: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...taskData } : task)),
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const addMessage = (messageData: Omit<ChatMessage, "id" | "timestamp">) => {
    const newMessage: ChatMessage = {
      ...messageData,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const updateContactStatus = (id: string, status: Contact["status"]) => {
    updateContact(id, { status });
  };

  const addCallLog = (callLogData: Omit<CallLog, "id" | "createdAt">) => {
    const newCallLog: CallLog = {
      ...callLogData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setCallLogs((prev) => [...prev, newCallLog]);
  };

  const addEmail = (emailData: Omit<Email, "id" | "createdAt">) => {
    const newEmail: Email = {
      ...emailData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setEmails((prev) => [...prev, newEmail]);
  };

  const updateEmail = (id: string, emailData: Partial<Email>) => {
    setEmails((prev) =>
      prev.map((email) =>
        email.id === id ? { ...email, ...emailData } : email,
      ),
    );
  };

  const addMeeting = (meetingData: Omit<Meeting, "id" | "createdAt">) => {
    const newMeeting: Meeting = {
      ...meetingData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setMeetings((prev) => [...prev, newMeeting]);
  };

  const updateMeeting = (id: string, meetingData: Partial<Meeting>) => {
    setMeetings((prev) =>
      prev.map((meeting) =>
        meeting.id === id ? { ...meeting, ...meetingData } : meeting,
      ),
    );
  };

  const addProposal = (proposalData: Omit<Proposal, "id" | "createdAt">) => {
    const newProposal: Proposal = {
      ...proposalData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setProposals((prev) => [...prev, newProposal]);
  };

  const updateProposal = (id: string, proposalData: Partial<Proposal>) => {
    setProposals((prev) =>
      prev.map((proposal) =>
        proposal.id === id ? { ...proposal, ...proposalData } : proposal,
      ),
    );
  };

  const updateCallLog = (id: string, callLogData: Partial<CallLog>) => {
    setCallLogs((prev) =>
      prev.map((callLog) =>
        callLog.id === id ? { ...callLog, ...callLogData } : callLog,
      ),
    );
  };

  return (
    <CRMContext.Provider
      value={{
        contacts,
        tasks,
        messages,
        teamMembers,
        callLogs,
        emails,
        meetings,
        proposals,
        addContact,
        updateContact,
        deleteContact,
        addTask,
        updateTask,
        deleteTask,
        addMessage,
        updateContactStatus,
        addCallLog,
        addEmail,
        updateEmail,
        addMeeting,
        updateMeeting,
        addProposal,
        updateProposal,
        updateCallLog,
      }}
    >
      {children}
    </CRMContext.Provider>
  );
}

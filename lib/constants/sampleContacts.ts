import { Contact } from "@/types/types";
const sampleContacts: Contact[] = [
  {
    id: "1",
    name: "Alice Johnson",
    company: "Tech Corp",
    email: "alice@techcorp.com",
    phone: "+1 (555) 123-4567",
    status: "new",
    createdAt: new Date().toISOString(),
    source: "Website",
    rep: "John Doe",
  },
  {
    id: "2",
    name: "Bob Smith",
    company: "Design Studio",
    email: "bob@designstudio.com",
    phone: "+1 (555) 987-6543",
    status: "contacted",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    source: "Referral",
    rep: "Jane Smith",
  },
  {
    id: "3",
    name: "Carol Davis",
    company: "Marketing Inc",
    email: "carol@marketing.com",
    phone: "+1 (555) 456-7890",
    status: "qualified",
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    source: "LinkedIn",
    rep: "Mike Johnson",
  },
];
export default sampleContacts;

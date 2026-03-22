import { FileText, Mail, Phone, Plus, Calendar } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import AddContactModal from "../modals/AddContactModal";
import { LogCallModal } from "../modals/LogCallModal";
import { SendEmailModal } from "../modals/SendEmailModal";
import { ScheduleMeetingModal } from "../modals/ScheduleMeetingModal";
import { CreateProposalModal } from "../modals/CreateProposalModal";

const QuickActionsBar = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showLogCallModal, setShowLogCallModal] = useState(false);
  const [showSendEmailModal, setShowSendEmailModal] = useState(false);
  const [showScheduleMeetingModal, setShowScheduleMeetingModal] =
    useState(false);
  const [showCreateProposalModal, setShowCreateProposalModal] = useState(false);
  return (
    <div className="flex flex-wrap gap-2 items-center">
      {/* Buttons */}
      <Button
        onClick={() => setShowAddModal(true)}
        className="flex items-center gap-2"
      >
        <Plus className="h-4 w-4" />
        Add Lead
      </Button>
      <Button
        onClick={() => setShowLogCallModal(true)}
        variant="outline"
        className="flex items-center gap-2 bg-transparent"
      >
        <Phone className="h-4 w-4" />
        Log Call
      </Button>
      <Button
        onClick={() => setShowSendEmailModal(true)}
        variant="outline"
        className="flex items-center gap-2 bg-transparent"
      >
        <Mail className="h-4 w-4" />
        Send Email
      </Button>
      <Button
        onClick={() => setShowScheduleMeetingModal(true)}
        variant="outline"
        className="flex items-center gap-2 bg-transparent"
      >
        <Calendar className="h-4 w-4" />
        Schedule Meeting
      </Button>
      <Button
        onClick={() => setShowCreateProposalModal(true)}
        variant="outline"
        className="flex items-center gap-2 bg-transparent"
      >
        <FileText className="h-4 w-4" />
        Create Proposal
      </Button>
      {/* All Modals */}
      <AddContactModal open={showAddModal} onOpenChange={setShowAddModal} />
      <LogCallModal
        open={showLogCallModal}
        onOpenChange={setShowLogCallModal}
      />
      <SendEmailModal
        open={showSendEmailModal}
        onOpenChange={setShowSendEmailModal}
      />
      <ScheduleMeetingModal
        open={showScheduleMeetingModal}
        onOpenChange={setShowScheduleMeetingModal}
      />
      <CreateProposalModal
        open={showCreateProposalModal}
        onOpenChange={setShowCreateProposalModal}
      />
    </div>
  );
};

export default QuickActionsBar;

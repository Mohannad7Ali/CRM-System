const EMAIL_TEMPLATES = {
  introduction: {
    subject: "Introduction - Let's Connect",
    body: `Hi {{name}},

I hope this email finds you well. I wanted to reach out and introduce myself and our services at {{company}}.

We specialize in helping businesses like {{contactCompany}} achieve their goals through innovative solutions.

I'd love to schedule a brief call to discuss how we might be able to help you. Are you available for a 15-minute conversation this week?

Best regards,
{{sender}}`,
  },
  followUp: {
    subject: "Following up on our conversation",
    body: `Hi {{name}},

Thank you for taking the time to speak with me earlier. I wanted to follow up on our conversation about {{topic}}.

As discussed, I'm attaching some additional information that might be helpful for your decision-making process.

Please let me know if you have any questions or if you'd like to schedule another call to discuss next steps.

Best regards,
{{sender}}`,
  },
  proposal: {
    subject: "Proposal for {{contactCompany}}",
    body: `Hi {{name}},

I'm excited to share our proposal for {{contactCompany}}. Based on our discussions, I believe we have a solution that will meet your needs perfectly.

The proposal includes:
- Detailed project scope
- Timeline and milestones
- Investment details
- Next steps

I'm available to discuss any questions you might have. When would be a good time for a call?

Best regards,
{{sender}}`,
  },
};
export default EMAIL_TEMPLATES;

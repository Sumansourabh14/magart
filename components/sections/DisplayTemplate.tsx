import VogueTemplate from "../templates/Vogue";
import TemplateDownloader from "../utils/TemplateDownloader";

const DisplayTemplate = () => {
  return (
    <TemplateDownloader>
      <VogueTemplate
        image="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="John Doe"
        title="Vogue"
        subtitle="Vogue subtitle"
      />
    </TemplateDownloader>
  );
};

export default DisplayTemplate;

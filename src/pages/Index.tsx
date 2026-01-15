import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WorkflowGrid } from "@/components/WorkflowGrid";
import { Footer } from "@/components/Footer";
import { useWorkflows } from "@/hooks/useWorkflows";

const Index = () => {
  const { data: workflows } = useWorkflows();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection workflowCount={workflows?.length ?? 0} />
        <WorkflowGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import Button from "./components/button";
import Card, { StatsCard } from "./components/card";
import GrayShades from "./components/gray-shades";
import LoadingTheme from "./components/loading-theme";
import { useApplyTheme } from "./hook/use-apply-theme";

function App() {
  const { isPending, theme } = useApplyTheme();

  if (isPending || !theme) {
    return <LoadingTheme />;
  }

  return (
    <div className="min-h-screen bg-background   p-8 w-full mx-auto space-y-5">
      <div className="flex flex-col sm:flex-row gap-4">
        <Card
          className="max-w-[400px]"
          title="Card Padrão"
          description="Este é um card com o estilo padrão usando bordas cinza e fundo branco."
        />
        <StatsCard title="Usuários Ativos" value="1,234" change="+12%" />
      </div>

      <Card
        title="Paleta de Cores"
        description="Demonstração das cores definidas no CSS personalizado"
      >
        <div className="space-y-6">
          {/* Cores Primárias */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">
              Cores Primárias
            </h4>
            <div className="flex space-x-4">
              <div className="text-left">
                <div className="w-20 h-20 bg-primary-light rounded-lg border-2 border-border mb-2"></div>
                <span className="text-xs text-muted-foreground">
                  primary-light
                </span>
              </div>
              <div className="text-left">
                <div className="w-20 h-20 bg-primary rounded-lg border-2 border-border mb-2"></div>
                <span className="text-xs text-muted-foreground">primary</span>
              </div>
              <div className="text-left">
                <div className="w-20 h-20 bg-primary-dark rounded-lg border-2 border-border mb-2"></div>
                <span className="text-xs text-muted-foreground">
                  primary-dark
                </span>
              </div>
            </div>
          </div>

          {/* Cores Secundárias */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">
              Cores Secundárias
            </h4>
            <div className="flex gap-4 ">
              <div className="text-left">
                <div className="w-20 h-20 bg-secondary-light rounded-lg border-2 border-border mb-2"></div>
                <span className="text-xs text-muted-foreground">
                  secondary-light
                </span>
              </div>
              <div className="text-left">
                <div className="w-20 h-20 bg-secondary rounded-lg border-2 border-border mb-2"></div>
                <span className="text-xs text-muted-foreground">secondary</span>
              </div>
              <div className="text-left">
                <div className="w-20 h-20 bg-secondary-dark rounded-lg border-2 border-border mb-2"></div>
                <span className="text-xs text-muted-foreground">
                  secondary-dark
                </span>
              </div>
            </div>
          </div>

          {/* Escala de Cinza */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">
              Escala de Cinza
            </h4>
            <GrayShades />
          </div>

          {/* Botões de Demonstração */}
          <div className="pt-4 border-t border-border">
            <h4 className="font-semibold text-foreground mb-3">
              Botões com as Cores
            </h4>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="sm">
                Botão Primário SM
              </Button>
              <Button variant="primary">Botão Primário</Button>
              <Button variant="primary" size="lg">
                Botão Primário LG
              </Button>
              <Button variant="secondary" size="sm">
                Botão Secundário SM
              </Button>
              <Button variant="secondary">Botão Secundário</Button>
              <Button variant="secondary" size="lg">
                Botão Secundário LG
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;

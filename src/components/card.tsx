import { cn } from "../helpers/cn";
import Button from "./button";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: string;
  description?: string;
  variant?: "default" | "primary" | "secondary";
};

export default function Card({
  title,
  description,
  variant = "default",
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border-2  w-full border-border p-6 shadow-lg transition-all duration-200 hover:shadow-xl",
        className
      )}
      {...props}
    >
      {/* Header do Card */}
      {(title || description) && (
        <div className="mb-4 border-b border-border pb-4">
          {title && (
            <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          )}
          {description && (
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Conteúdo do Card */}
      <div className="mb-6">
        {children || (
          <div className="space-y-4">
            <div className="bg-muted rounded-md p-4">
              <h4 className="font-semibold text-foreground mb-2">
                Conteúdo do Card
              </h4>
              <p className="text-muted-foreground text-sm">
                Este é um exemplo de conteúdo dentro do card. Você pode
                personalizar esta área com qualquer elemento que desejar.
              </p>
            </div>

            {/* Tags/Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                Primária
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                Secundária
              </span>
              <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                Neutro
              </span>
            </div>

            {/* Métricas/Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  Total
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">12</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  Ativo
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">36</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  Pending
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer com Botões */}
      <div className="flex justify-between items-center pt-4 border-t border-border">
        <div className="flex space-x-2">
          <Button variant="primary" size="sm">
            Ação Principal
          </Button>
          <Button variant="secondary" size="sm">
            Ação Secundária
          </Button>
        </div>
      </div>
    </div>
  );
}

// Componentes auxiliares para diferentes tipos de cards

export function ProfileCard({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card variant="primary" className={cn("max-w-sm", className)} {...props}>
      <div className="flex items-center space-x-4 mb-4">
        <div>
          <h3 className="font-bold text-foreground">João Silva</h3>
          <p className="text-muted-foreground text-sm">
            Desenvolvedor Frontend
          </p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Email:</span>
          <span className="text-foreground">joao@exemplo.com</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Telefone:</span>
          <span className="text-foreground">(11) 99999-9999</span>
        </div>
      </div>
    </Card>
  );
}

export function StatsCard({
  title,
  value,
  change,
  className,
  ...props
}: {
  title: string;
  value: string;
  change?: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card variant="secondary" className={cn("max-w-xs", className)} {...props}>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <div className="text-3xl font-bold text-secondary-dark mb-2">
          {value}
        </div>
        {change && (
          <div className="text-sm text-muted-foreground">
            <span className="text-green-600">↗ {change}</span> desde ontem
          </div>
        )}
      </div>
    </Card>
  );
}

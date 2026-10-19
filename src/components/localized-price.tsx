import {
  formatLocalizedPrice,
  localizedPriceParts,
  type CurrencyContext,
} from "@/lib/pricing";

export function LocalizedPrice({
  usd,
  context,
  className,
  fractionClassName,
}: {
  usd: number;
  context: CurrencyContext;
  className?: string;
  fractionClassName?: string;
}) {
  if (!fractionClassName) {
    return <span className={className}>{formatLocalizedPrice(usd, context)}</span>;
  }

  return (
    <span className={className}>
      {localizedPriceParts(usd, context).map((part, index) => (
        <span
          key={`${part.type}-${index}`}
          className={part.type === "decimal" || part.type === "fraction" ? fractionClassName : undefined}
        >
          {part.value}
        </span>
      ))}
    </span>
  );
}

export function ApproximatePriceNote({ context }: { context: CurrencyContext }) {
  if (!context.converted) return null;
  return <p className="mt-1 text-[10px] font-normal text-slate-500">Precio aproximado en tu moneda</p>;
}
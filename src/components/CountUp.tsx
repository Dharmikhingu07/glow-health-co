import { useCountUp } from "@/hooks/useCountUp";
import { formatNumber } from "@/utils/format";

export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const { ref, value: current } = useCountUp(value);
  return (
    <span ref={ref}>
      {formatNumber(current)}
      {suffix}
    </span>
  );
}

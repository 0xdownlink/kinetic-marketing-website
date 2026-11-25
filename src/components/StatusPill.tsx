import { STATUS_LABEL, type FeatureStatus } from "@/content/features";
import { cx } from "@/lib/cx";

export function StatusPill({ status }: { status: FeatureStatus }) {
  return (
    <span className={cx("status", "status--", status)}>
      {STATUS_LABEL[status]}
    </span>
  );
}

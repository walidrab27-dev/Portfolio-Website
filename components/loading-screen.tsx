import { LoaderRing } from "@/components/loader-ring";

export function LoadingScreen() {
  return (
    <div className="loading-screen fixed inset-0 z-[100] grid place-items-center bg-void" aria-hidden>
      <LoaderRing />
    </div>
  );
}

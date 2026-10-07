import { Progress as ProgressPrimitive } from "@base-ui/react/progress"
import { cn } from "@/lib/utils"

interface ProgressProps extends ProgressPrimitive.Root.Props {
  segments?: number
}

function Progress({
  className,
  children,
  value,
  segments = 5,
  ...props
}: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      value={value}
      data-slot="progress"
      className={cn("flex flex-col gap-2 w-full", className)}
      {...props}
    >
      {children}
      <ProgressTrack segments={segments}>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  )
}

interface ProgressTrackProps extends ProgressPrimitive.Track.Props {
  segments?: number
}

function ProgressTrack({
  className,
  children,
  segments = 5,
  ...props
}: ProgressTrackProps) {
  return (
    <ProgressPrimitive.Track
      className={cn(
        "relative flex h-5 w-full overflow-hidden rounded-none border border-black/40 bg-[#12161f]",
        className
      )}
      data-slot="progress-track"
      {...props}
    >
      {children}
    </ProgressPrimitive.Track>
  )
}

function ProgressIndicator({
  className,
  ...props
}: ProgressPrimitive.Indicator.Props) {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn(
        "h-full transition-all duration-300",
        "[background-image:repeating-linear-gradient(45deg,#f59e0b,#f59e0b_10px,#d97706_10px,#d97706_20px)]",
        className
      )}
      {...props}
    />
  )
}

function ProgressLabel({ className, ...props }: ProgressPrimitive.Label.Props) {
  return (
    <ProgressPrimitive.Label
      className={cn("text-sm font-semibold tracking-wide text-white", className)}
      data-slot="progress-label"
      {...props}
    />
  )
}

function ProgressValue({ className, ...props }: ProgressPrimitive.Value.Props) {
  return (
    <ProgressPrimitive.Value
      className={cn(
        "ml-auto text-sm font-bold tabular-nums text-amber-500",
        className
      )}
      data-slot="progress-value"
      {...props}
    />
  )
}

export {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
}
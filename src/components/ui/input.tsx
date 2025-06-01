import { cn } from "@/lib/utils";

export function Input({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
	return (
		<input
			className={cn("w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent", props.className)}
			{...props}
		/>
	)
}
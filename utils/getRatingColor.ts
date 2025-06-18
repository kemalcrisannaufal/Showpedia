export function getRatingColor(rating: number | null) {
  if (rating === null || rating < 0) return "bg-gray-500/50";

  if (rating >= 9) return "bg-green-800";
  if (rating >= 8.5) return "bg-green-700";
  if (rating >= 8) return "bg-green-600";
  if (rating >= 7.5) return "bg-green-500";
  if (rating >= 7) return "bg-emerald-500";
  if (rating >= 6.5) return "bg-amber-500";
  if (rating >= 6) return "bg-yellow-500";
  if (rating >= 5.5) return "bg-orange-500";
  if (rating >= 5) return "bg-red-500";
  return "bg-red-700";
}

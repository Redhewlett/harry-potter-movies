export function normaliseBudget(budget: string): string {
  // since we know we get 111 or 111-111
  const parsedBudget = budget.split('-');
  return parsedBudget.length > 1
    ? `$${parsedBudget[0]} - ${parsedBudget[1]}`
    : `$${parsedBudget[0]}`;
}

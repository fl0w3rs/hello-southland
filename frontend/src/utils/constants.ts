export const statusList = {
  processing: {
    text: 'Обрабатывается',
    classes: 'text-orange',
  },
  accepted: {
    text: 'Одобрена',
    classes: 'text-green',
  },
  declined: {
    text: 'Отклонена',
    classes: 'text-red-4',
  },
} as Record<string, Record<string, string>>;

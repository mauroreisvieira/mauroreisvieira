export const monthYear = (date: Date) =>
    `${new Date(date).toLocaleString('default', {
        month: 'long',
    })} ${new Date(date).getFullYear()}`;

export const weekdayYearMonthDay = (date: Date) =>
    new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

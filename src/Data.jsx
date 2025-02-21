export const setCurrentUser = (user) => {
    // type - מחרוזת שמגדירה איזה פעולה רוצים לעשות
    // מקובל לכתוב באותיות גדולות
    // payload - parameters
    return { type: 'SET_CURRENT_USER', payload: user }}
export default defineNuxtPlugin((nuxtApp) => {

    // Simple formatter from Wordpress to European date format (m/d/y)
    
    return {
        provide: {
            formatDate : (time:string) => {
                const date = new Date(time);

                // Get year, month, and day part from the date
                const year = date.toLocaleString("default", { year: "numeric" });
                const month = date.toLocaleString("default", { month: "2-digit" });
                const day = date.toLocaleString("default", { day: "2-digit" });

                return `${day}/${month}/${year}`;
            }
        },
    };
});
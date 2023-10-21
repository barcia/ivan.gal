// same function but with the constants names in english
export const galicianDate = (date) => {
    const dayNames = ['Domingo', 'Luns', 'Martes', 'Mércores', 'Xoves', 'Venres', 'Sábado'];
    const dayNamesAlt = ['Domingo', 'Segunda feira', 'Terceira feira', 'Cuarta feira', 'Quinta feira', 'Sexta feira', 'Sábado'];
    const monthNames = ['Xaneiro', 'Febreiro', 'Marzo', 'Abril', 'Maio', 'Xuño', 'Xullo', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Decembro'];
    
    const dayOfWeek = date.getDay();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    
    const dayOfWeekInGalician= dayNames[dayOfWeek];
    const monthInGalician= monthNames[month];

    return {
        dayOfWeekInGalician,
        monthInGalician,
        day,
        month,
        year,
        hour,
        minute
    }
}
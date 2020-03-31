export function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear().toString().substr(-2);

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day,month,year].join('/');
}

export function formatLongDate(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
    "Sunday"
    ];

        
    var nth = function(d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    }

    var d = new Date(date),
        month = monthNames[d.getMonth()],
        day = '' + dayNames[d.getDay()-1];
        date = '' + d.getDate();

    return day + ' ' + date + nth(date) + ' of ' + month;
}

export function isToday(date, today) {
    if (formatDate(date) === formatDate(today)) {
        return "Today"
    } else {
        return formatDate(date);
    }
}
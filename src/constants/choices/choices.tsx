interface objectProps { key: string | number, label: string }

export const paymentMethod: objectProps[] = [
    {
        key: 1,
        label: "Salary"
    },
    {
        key: 2,
        label: "Hourly"
    }
]


export const genderChoices: objectProps[] = [
    {
        key: 1,
        label: "Male"
    },
    {
        key: 2,
        label: "Female"
    },
    {
        key: 3,
        label: "Others"
    }
]


export const workType: objectProps[] = [
    {
        key: 1,
        label: "Full Time"
    },
    {
        key: 2,
        label: "Part Time"
    }
]

export const StatusChoices: objectProps[] = [
    {
        key: 1,
        label: "Active"
    },
    {
        key: 2,
        label: "Archive"
    }
]


export const LocationChoices: objectProps[] = [
    {
        key: 1,
        label: "Remote"
    },
    {
        key: 2,
        label: "Office"
    },
    {
        key: 3,
        label: "At Event"
    }
]

export const DayChoices: objectProps[] = [
    {
        key: "Mon",
        label: "Monday"
    },
    {
        key: "Tue",
        label: "Tuesday"
    },
    {
        key: "Wed",
        label: "Wednesday"
    },
    {
        key: "Thu",
        label: "Thursday"
    },
    {
        key: "Fri",
        label: "Friday",
    },
    {
        key: "Sat",
        label: "Saturday"
    },
    {
        key: "Sun",
        label: "Sunday"
    }
]

export const TYPECHOICES: objectProps[] = [
    {
        key: "home",
        label: "Home"
    },
    {
        key: "office",
        label: "Office"
    }
]

export const LEAVE_TYPES: objectProps[] = [
    {
        key: "S",
        label: "Sick Leave",
    },
    {
        key: "V",
        label: "Vacation"
    },
    {
        key: "H",
        label: "Work from Home"
    },
    {
        key: "O",
        label: "Day-Off"
    }
]

export const STATUS_CHOICES: objectProps[] = [
    {
        key: "Pending",
        label: "Pending",
    },
    {
        key: "Accepted",
        label: "Accepted"
    },
    {
        key: "Rejected",
        label: "Rejected"
    }
]


export const LANGUAGE_SPOKEN_CHOICES: objectProps[] = [
    {
        key: 1,
        label: "English",
    },
    {
        key: 2,
        label: "Spanish"
    },
    {
        key: 3,
        label: "Portuguese"
    },
    {
        key: 4,
        label: "Other"
    }
]
export const taskChart = [
    { value: 60, status: 'in compliance' },
    { value: 43, status: '30 days out' },
    { value: 46, status: 'out of compliance' },
    { value: 55, status: 'approval' },
];

export const unresolvedData = [
    { value: 5, status: 'waiting on information' },
    { value: 60, status: 'in compliance' },
    { value: 43, status: '30 days out' },
    { value: 46, status: 'out of compliance' },
    { value: 55, status: 'approval needed' },
]


// task table dummy data
export const taskTableRows = [{
        task: 'Order New GL',
        status: 'updated 1 day ago',
        src: require('../assets/images/profile-img.jpg'),
        related: 'Big Builder Contractor, Inc',
        date: 'May 08, 2021',
        priority: 'high',
        id: 1
    },
    {
        task: 'F/U on Primary Non-Contributory Endorsement GL',
        status: 'updated 1 day ago',
        src: require('../assets/images/profile-img.jpg'),
        related: 'Bigger Builder & Contractor, Inc',
        date: 'May 01, 2020',
        priority: 'low',
        id: 2
    },
    {
        task: 'F/U for Waiver of Subro on GL & Comp',
        status: 'updated 1 day ago',
        src: require('../assets/images/profile-img.jpg'),
        related: 'Not as Big Builder, LLC',
        date: 'May 08, 2022',
        priority: 'normal',
        id: 3
    },
    {
        task: 'Waiver of Subro on WC',
        status: 'updated 1 day ago',
        src: require('../assets/images/profile-img.jpg'),
        related: 'I’m just a Painter, LLC',
        date: 'May 08, 2024',
        priority: 'low',
        id: 4
    },
    {
        task: 'Dummy teak to complete',
        status: 'updated 1 day ago',
        src: require('../assets/images/profile-img.jpg'),
        related: 'small builder INC',
        date: 'May 08, 2021',
        priority: 'high',
        id: 5
    },
    {
        task: 'Order old gls task',
        status: 'updated 1 day ago',
        src: require('../assets/images/profile-img.jpg'),
        related: 'Medium Builder Contractor, Inc',
        date: 'May 08, 2023',
        priority: 'normal',
        id: 6
    },
    {
        task: 'Cancel order form',
        status: 'updated 1 day ago',
        src: require('../assets/images/profile-img.jpg'),
        related: 'Big Builder Contractor, Inc',
        date: 'May 08, 2021',
        priority: 'high',
        id: 7
    },
    {
        task: 'Order New GL',
        status: 'updated 1 day ago',
        src: require('../assets/images/profile-img.jpg'),
        related: 'Big Builder Contractor, Inc',
        date: 'May 08, 2021',
        priority: 'low',
        id: 8
    },
];


// for task chart
export const tasksData = [{
        month: "1 May",
        tasks: 600,
    },
    {
        month: "8 May",
        tasks: 150,
    },
    {
        month: "16 May",
        tasks: 660,
    },
    {
        month: "31 May",
        tasks: 50,
    },
];


//   Reporitng tasks data
export const reportingTasksData = [{
        task: 'Send quote review by Sunday',
        type: 'reminder',
        priority: 'completed',
        date: 'May 08, 2021',
        name: 'Matthew Pitnick',
        src: require('../assets/images/profile-img.jpg')
    },
    {
        task: 'Invite to office meet-up',
        type: 'call',
        priority: 'ended',
        date: 'May 08, 2021',
        name: 'Matthew Pitnick',
        src: require('../assets/images/profile-img.jpg')
    },
    {
        task: 'Invite to office meet-up',
        type: 'event',
        priority: 'completed',
        date: 'May 08, 2021',
        name: 'Matthew Pitnick',
        src: require('../assets/images/profile-img.jpg')
    },
    {
        task: 'Traveling on monday',
        type: 'reminder',
        priority: 'completed',
        date: 'May 08, 2021',
        name: 'Matthew Pitnick',
        src: require('../assets/images/profile-img.jpg')
    },
    {
        task: 'Send quote review by seturday',
        type: 'call',
        priority: 'ended',
        date: 'May 08, 2021',
        name: 'Matthew Pitnick',
        src: require('../assets/images/profile-img.jpg')
    },
]



// clients, subcontractors, agents dummy data
export const clientsTableData = [{
        name: "Lindsey Stroud",
        email: "lindsey.stroud@gmail.com",
        companyName: "hatchbuck",
        role: "client",
        recentActive: "5 minute ago",
        id: 1,
        src: require('../assets/images/profile-img.jpg'),
        owner: "motthew",
        account: 'Big Builder Contractor, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'Mary Accounting',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Nicci Troiani",
        email: "nicci.troiani@gmail.com",
        companyName: "Linkedin in",
        role: "client",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 2,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "George Fields",
        email: "george.fields@gmail.com",
        companyName: "Clockiky",
        role: "client",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 3,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Rebecca Moore",
        email: "rebecca.moore@gmail.com",
        companyName: "Apple",
        role: "client",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 4,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Jane Doe",
        email: "jane.doe@gmail.com",
        companyName: "Twitter",
        role: "client",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 5,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Jones Dermot",
        email: "dermot.jones@gmail.com",
        companyName: "whatsapp",
        role: "client",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 6,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Martin Merces",
        email: "martin.merces@gmail.com",
        companyName: "Upwork",
        role: "client",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 7,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Franz Ferdinand",
        email: "franz.ferdiand@gmail.com",
        companyName: "Fiverr",
        role: "client",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 8,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "John smith",
        email: "john.smith@gmail.com",
        companyName: "Slack",
        role: "client",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 9,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Judith wiliams",
        email: "judith.williams@gmail.com",
        companyName: "Facebook",
        role: "client",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 10,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
];
// subcontractors table data
export const subTableData = [{
        name: "Mark smith",
        email: "mark.smith@gmail.com",
        companyName: "Meta",
        role: "sub",
        recentActive: "5 minute ago",
        id: 1,
        src: require('../assets/images/profile-img.jpg'),
        owner: "zack contractor",
        account: 'Contractor, Inc',
        wcExpDate: '11/30/2010', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'Accounting',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Nicci Troiani",
        email: "nicci.troiani@gmail.com",
        companyName: "Linkedin in",
        role: "sub",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 2,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "George Fields",
        email: "george.fields@gmail.com",
        companyName: "Clockiky",
        role: "sub",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 3,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Rebecca Moore",
        email: "rebecca.moore@gmail.com",
        companyName: "Apple",
        role: "sub",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 4,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Jane Doe",
        email: "jane.doe@gmail.com",
        companyName: "Twitter",
        role: "sub",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 5,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Jones Dermot",
        email: "dermot.jones@gmail.com",
        companyName: "whatsapp",
        role: "sub",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 6,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Martin Merces",
        email: "martin.merces@gmail.com",
        companyName: "Upwork",
        role: "sub",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 7,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Franz Ferdinand",
        email: "franz.ferdiand@gmail.com",
        companyName: "Fiverr",
        role: "sub",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 8,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "John smith",
        email: "john.smith@gmail.com",
        companyName: "Slack",
        role: "sub",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 9,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Judith wiliams",
        email: "judith.williams@gmail.com",
        companyName: "Facebook",
        role: "sub",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 10,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
];
// agents table data
export const agentsTableData = [{
        name: "Leonard johnson",
        email: "leonard.johnson@gmail.com",
        companyName: "coca cola",
        role: "agents",
        owner: "motthew",
        recentActive: " 1 year ago",
        id: 1,
        src: require('../assets/images/profile-img.jpg'),
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Nicci Troiani",
        email: "nicci.troiani@gmail.com",
        companyName: "Linkedin in",
        role: "agents",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 2,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "George Fields",
        email: "george.fields@gmail.com",
        companyName: "Clockiky",
        role: "agents",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 3,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Rebecca Moore",
        email: "rebecca.moore@gmail.com",
        companyName: "Apple",
        role: "agents",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 4,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Jane Doe",
        email: "jane.doe@gmail.com",
        companyName: "Twitter",
        role: "agents",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 5,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Jones Dermot",
        email: "dermot.jones@gmail.com",
        companyName: "whatsapp",
        role: "agents",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 6,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Martin Merces",
        email: "martin.merces@gmail.com",
        companyName: "Upwork",
        role: "agents",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 7,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Franz Ferdinand",
        email: "franz.ferdiand@gmail.com",
        companyName: "Fiverr",
        role: "agents",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 8,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "John smith",
        email: "john.smith@gmail.com",
        companyName: "Slack",
        role: "agents",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 9,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
    {
        name: "Judith wiliams",
        email: "judith.williams@gmail.com",
        companyName: "Facebook",
        role: "agents",
        owner: "motthew",
        recentActive: "5 minute ago",
        src: require('../assets/images/profile-img.jpg'),
        id: 10,
        account: 'Big Builder, Inc',
        wcExpDate: '05/30/2022', 
        glExpDate: '06/20/2021', 
        pointOfCont: 'yahoo',
        phone: '954-716-0735',
        address: {house: '12345 SW 88th St', street: 'Fort Lauderdale, FL 33031'},
        notes: [
            {
            date: '05/1/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2020',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '04/8/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/28/2018',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
            {
            date: '06/4/2010',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '05/18/2021',
            note: 'Lorem ipsum dolor sit amet, consectetur afewlfkwefkjwe;lfmw;gfmw wejfsekjfekfj wlkjfdipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
            {
            date: '06/22/2022',
            note: 'Lorem ipsum dolor sit amet, consectetur adipiscidsdakjfdslkfjslkfjwe ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    },
];
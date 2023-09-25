interface User{
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponName: string): number,
}

// "reopening" the interface
interface User {
    githubToken: string
}

interface Admin extends User { 
    role: "admin" | "superadmin" | "support"
}



const ian: Admin = {
    dbId: 12,
    email: "i@o.cat",
    userId: 1231,
    role: "admin",
    githubToken: "123",
    startTrail: () => "trail started",
    getCoupon: (name: "uab12") => 12,
}

ian.email = "i@i.com"
// ian.dbId = 123 // Error: Cannot assign to 'dbId' because it is a read-only property.
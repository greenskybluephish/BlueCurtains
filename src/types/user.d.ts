declare interface User {
      userId: number 
      userName: string
    userLogin:  string 
     active: boolean 
     userShift?: number 
     userInitials: string 
     emailAddress: string  
     dateLastLogin?: Date 
     userTitle: string  
}

declare interface UserResponse {
    user: User
}

declare interface UsersResponse {
    users: User[]
    usersCount: number
}
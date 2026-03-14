// ✅ FIXED: Use relative paths so Vite proxy handles them.
//    Vite proxies /api → http://localhost:4000
//    This means cookies are sent on the same origin (localhost:5173) ✓

export const mainURL = "/api/v1"
export const usersURL = "/users"
export const tasksURL = "/tasks"

// Users
export const LoginUserURL                = `${mainURL}${usersURL}/login`
export const RegisterUserURL             = `${mainURL}${usersURL}/signup`
export const LogoutUserURL               = `${mainURL}${usersURL}/logout`
export const getCurrentLoggedinUserURL   = `${mainURL}${usersURL}/currentloggedinuser`

// Tasks
export const CreateTasksURL  = `${mainURL}${tasksURL}/createtask`
export const UpdateTaskURL   = `${mainURL}${tasksURL}/updatetask`
export const DeleteTaskURL   = `${mainURL}${tasksURL}/deletetask`
export const GetAllTasksURL  = `${mainURL}${tasksURL}/getmyalltasks`
export const GetOneTaskURL   = `${mainURL}${tasksURL}/getmyonetask`

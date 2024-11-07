import { v4 as uuidv4 } from 'uuid'
import { User } from "../types/user"

class UserModel {
  private users: User[] = []

  // Get all users
  findAll(): User[] {
    return this.users
  }

  // Get user by id
  findById(id: string): User | undefined {
    const user = this.users.find(user => user.id === id)
    if (!user) return undefined
    return user
  }

  // Get user by username
  findByUsername(username: string): User | undefined {
    const user = this.users.find(user => user.username === username)
    if (user) {
      return user
    }
    return undefined
  }

  // Create user
  createUser(newUser: Omit<User, 'id'>): User {
    const user = {
      id: uuidv4(),
      ...newUser
    }
    this.users.push(user)
    return user
  }

  // Edit user
  editUser(id: string, newData: Partial<User>): User | undefined {
    const index = this.users.findIndex(user => user.id === id)
    if (index === -1) return undefined
    const updatedUser = {
      ...this.users[index],
      ...newData
    }
    this.users[index] = updatedUser
    return updatedUser
  }

  // Delete user
  deleteUser(id: string): boolean {
    const index = this.users.findIndex(user => user.id === id)
    if (index === -1) return false
    this.users.splice(index, 1)
    return true
  }
}

export default new UserModel
export interface TaskTypes {
  id: number
  title: string
  description: string
  date: string
  category: string
  column: 'Обзор' | 'Сделать' | 'В процессе выполнения' | 'Проверка'
  users: string[]
  image?: string
}

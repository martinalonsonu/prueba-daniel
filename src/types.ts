export interface Notes {
    id: string
    date: string
    title: string
    autor: string
    section: string
    image: string
    type: string
  }
  
export interface Result {
    record: {
      notes: Notes[]
    }
  }
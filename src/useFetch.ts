import { useState, useEffect } from "react"
import { Notes, Result } from './types'

export const useFetch = () => {
    const [notes, setNotes] = useState<Notes[]>([])
    const [error, setError] = useState()

    useEffect(() => {
        fetch('https://api.jsonbin.io/v3/b/63654b012b3499323bf58225')
          .then((response) => response.json())
          .then((result: Result) => setNotes(result.record.notes))
          .catch((err) => setError(err) )
      }, [])

      return { notes, setNotes, error }
}
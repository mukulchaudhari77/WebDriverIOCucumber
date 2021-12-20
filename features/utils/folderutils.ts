import fs from 'fs'
export const deleteFolder = (path: string) => {
    fs.rmdirSync(path, { recursive: true })
}
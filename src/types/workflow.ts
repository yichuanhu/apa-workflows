export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      workflows: {
        Row: {
          id: string
          title: string
          description: string
          video_path: string
          video_size: number
          markdown_content: string
          is_public: boolean
          package_path: string | null
          package_size: number | null
          package_name: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          video_path: string
          video_size: number
          markdown_content: string
          is_public?: boolean
          package_path?: string | null
          package_size?: number | null
          package_name?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          video_path?: string
          video_size?: number
          markdown_content?: string
          is_public?: boolean
          package_path?: string | null
          package_size?: number | null
          package_name?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type Workflow = Tables<'workflows'>

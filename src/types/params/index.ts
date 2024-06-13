export interface IGameInfoParams {
  params: {
    id: string
  }
}

export interface AuthSectionProps {
  title: string
  children: React.ReactNode
  extraSection?: React.ReactNode
}

export interface ISharedTabProps {
  tab: string
  to: string
  active: boolean
}

export type ISharedTabEmits = {
  updateActiveTab: (tab: string) => void
}

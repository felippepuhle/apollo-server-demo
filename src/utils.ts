import dataSources from './dataSources'

export type ContextType = {
  dataSources: ReturnType<typeof dataSources>,
}

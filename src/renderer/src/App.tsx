import { ActionButtonsRow, Content, MessagePreviewList, RootLayout, Sidebar } from "@/components"

const App = () => {
  return (
    <>
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-0"/>
          <MessagePreviewList className="mt-3 space-y-1"/>
        </Sidebar>
        <Content className="border-l bg-neutral-900 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}

export default App

import { ActionButtonsRow, Content, MessageBox, MessagePreviewList, RootLayout, SetupPreview, Sidebar } from "@/components";

const isSetup = true;

const App = () => {
  return (
    <>
      {isSetup ? 
      <RootLayout>

        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mb-2"/>
          <MessagePreviewList className="space-y-1"/>
        </Sidebar>

        <Content className="border-l bg-neutral-900 border-l-white/20">
          <MessageBox />
        </Content>
        
      </RootLayout> 
      : 
      <SetupPreview>Sign in</SetupPreview>
      }
    </>
  )
}

export default App

import { ActionButtonsRow, Content, MessagePreviewList, MessageTextbox, RootLayout, SetupPreview, Sidebar } from "@/components";
import { MessageComposeView } from "./components/MessageComposeView";

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
          <div className="flex flex-col h-screen justify-between">
            <MessageComposeView></MessageComposeView>
            <MessageTextbox className="p-4 rounded-lg justify-between"/>
          </div>
        </Content>
        
      </RootLayout> 
      : 
      <SetupPreview>Sign in</SetupPreview>
      }
    </>
  )
}

/*
{messagesMock.map((message, index) => (
                <MessagePreview 
                key={message.contact + message.lastEditTime} {...message}
                isActive={selectedMessageIndex === index}
                onClick={handleMessageSelect(index)}
                {...message}
*/

export default App

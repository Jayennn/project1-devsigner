// import { Button } from "./components/Atoms/Button"

import Button from "./components/Atoms/Button"
import { Card, CardContent, CardFooter, CardHeader } from "./components/Atoms/Card"
import { Input } from "./components/Atoms/Input"
import { Typography } from "./components/Atoms/Typography"
import image from "./assets/card/Office.png"
import { LearnMore } from "./components/icons/LearnMore"
import Header from "./components/Templates/Header"
import Footer from "./components/Templates/Footer"


function App() {

  return (
    <>
      <Header />
      <main className="mt-20 w-full h-screen grid gap-5 place-content-center">
        <h1>Components</h1>
        <div className="flex gap-2">
          <Button type="button" variant={"outline"} size={"default"}>
            Lorem, ipsum.
          </Button>
          <Button type="button" variant={"default"} size={"lg"}>
            Lorem, ipsum.
          </Button>
        </div>
        <div>
          <Typography variant="h1" color="primary">
            h1 : Lorem, ipsum dolor.
          </Typography>
          <Typography variant="h3" color="primary">
            h3 : Lorem, ipsum dolor.
          </Typography>
          <Typography variant="h6" color="primary">
            h6 : Lorem, ipsum dolor.
          </Typography>
          <Typography variant="p" color="secondary">
            p : Lorem, ipsum dolor.
          </Typography>
        </div>
        <div>
          <Typography variant="h6" color="secondary">
            input:
          </Typography>
          <Input placeholder="Enter your email" />
          <Typography variant="h6" color="secondary">
            input with button:
          </Typography>
          <Input button={true} placeholder="Enter your email" />
        </div>
        <div>
          <Typography  variant="h6" color="secondary">
            Card
          </Typography>
          <Card className="max-w-[18rem] gap-7">
            <CardHeader>
              <img src={image} alt="office" />
            </CardHeader>
            <CardContent>
              <Typography variant="h6" color="primary">
                Office Space
              </Typography>
              <Typography variant="p" color="secondary">
                Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.
              </Typography>
            </CardContent>
            <CardFooter className="flex items-center gap-2">
              <Typography variant="p" className="text-[#0192FE]">
                Learn more
              </Typography>
              <LearnMore />
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App

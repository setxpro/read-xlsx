import { server } from "./server";

server.listen(process.env.PORT, () => console.log(`Connecting to ${process.env.PORT}`))

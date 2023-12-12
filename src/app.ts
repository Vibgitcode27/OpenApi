// src/app.ts
import express, {json, urlencoded} from "express";
import { RegisterRoutes } from "../build/routes";
import swaggerUi from "swagger-ui-express"
import { Response as ExResponse, Request as ExRequest } from "express";


export const app = express();

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
); // We don't use urlEncoded fromat

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(
      swaggerUi.generateHTML(await import("../build/swagger.json"))
    );
  });

app.use(json());

RegisterRoutes(app);

// This will create node-client , you can create clients for multiple languages

// npx openapi-typescript-codegen -i ./build/swagger.json -o node-client -c fetch
// npx openapi-typescript-codegen -i ./build/swagger.json -o node-client -c axios

// In your front-end project you have to import 
// import { DefaultService } from "../node-client";
// DefaultService.get("asd")
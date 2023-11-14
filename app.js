import { serve } from "./deps.js";
import { configure, renderFile } from "./deps.js";

configure({
    views: `${Deno.cwd()}/Views/`,
});

const responseDetails = {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const data = {
    count: 0,
};

const handleRequest = async (request) => {
    const url = new URL(request.url);
    if (url.pathname === "/count") {
        data.count++;
        return new Response(await renderFile("count.eta", data), responseDetails);
    }

    return new Response("Hello you!");
};

serve(handleRequest, { port: 7777 });


// test
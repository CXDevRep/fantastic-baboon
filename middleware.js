var approuter = require('@sap/approuter');
const fetch = require('node-fetch')

var ar = approuter();

// Fetch Info
const basicAuthStringFetch = 'c2ItYTRkNzk3MGYtNzBlOC00ZjQ3LTljZjktZjhhYmI3ZjFiZGRmIWIxNDU4MjF8Y2xpZW50IWIzNjUwOjlkODA2MTAyLWRkN2QtNDNhMi1hNmNhLTU3NzU1YmNiMzM4NyQ2a295cnpkdlI3Mjc1aDllajBITEQxeGxOWFNabnpGT2Y5V0c1SFZCMC0wPQ=='
var currentToken = "JhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vc2FwLWludGVybmFsLXVibi1xLmF1dGhlbnRpY2F0aW9uLmV1MTAuaGFuYS5vbmRlbWFuZC5jb20vdG9rZW5fa2V5cyIsImtpZCI6ImRlZmF1bHQtand0LWtleS0tNzQ0NjM5MjMiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiI3ODliMTk0Zjk5NGE0OWRhODI5YjAxZDEwY2FhNDVkMyIsImFjciI6eyJ2YWx1ZXMiOlsidXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFjOmNsYXNzZXM6UGFzc3dvcmRQcm90ZWN0ZWRUcmFuc3BvcnQiXX0sImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJzdWJhY2NvdW50aWQiOiJiYTkwZWJmZC1mNGE0LTQyZTMtOGVkOS01ZjE4ZWY5ZGFiMWUiLCJ6ZG4iOiJzYXAtaW50ZXJuYWwtdWJuLXEiLCJzZXJ2aWNlaW5zdGFuY2VpZCI6ImY1YjY4ZTJmLTY3MzYtNGY1Ni1hMjU3LTg5ZDFjZDQzMzIyYSJ9LCJ1c2VyX3V1aWQiOiIyNzQ0MmE4NS1mN2E1LTQxNzMtYTAyNy05OTA4MjUxZmZjOTYiLCJ4cy51c2VyLmF0dHJpYnV0ZXMiOnt9LCJhbXIiOlsiZXh0Il0sImdyYW50ZWRfc2NvcGVzIjpbIm9wZW5pZCIsImFwcHJvdXRlci1zYWMtc2FjZXUxMCF0MzY1MC5zYXAuZnBhLnVzZXIiLCJ1YWEudXNlciJdLCJ4cy5zeXN0ZW0uYXR0cmlidXRlcyI6eyJ4cy5zYW1sLmdyb3VwcyI6WyJzYWMiXSwieHMucm9sZWNvbGxlY3Rpb25zIjpbInNhYy51c2VycyJdfSwiZ2l2ZW5fbmFtZSI6ImZpbm4ub2xlLmhvcHBlIiwiZmFtaWx5X25hbWUiOiJzYXAuY29tIiwic3ViIjoiYzc5NjMyZGYtNTY5OS00YmU5LWEyNzEtNDgwODM0ZjM3YWYwIiwic2NvcGUiOlsib3BlbmlkIiwiYXBwcm91dGVyLXNhYy1zYWNldTEwIXQzNjUwLnNhcC5mcGEudXNlciIsInVhYS51c2VyIl0sImNsaWVudF9pZCI6InNiLWE0ZDc5NzBmLTcwZTgtNGY0Ny05Y2Y5LWY4YWJiN2YxYmRkZiFiMTQ1ODIxfGNsaWVudCFiMzY1MCIsImNpZCI6InNiLWE0ZDc5NzBmLTcwZTgtNGY0Ny05Y2Y5LWY4YWJiN2YxYmRkZiFiMTQ1ODIxfGNsaWVudCFiMzY1MCIsImF6cCI6InNiLWE0ZDc5NzBmLTcwZTgtNGY0Ny05Y2Y5LWY4YWJiN2YxYmRkZiFiMTQ1ODIxfGNsaWVudCFiMzY1MCIsInJldm9jYWJsZSI6dHJ1ZSwiZ3JhbnRfdHlwZSI6ImF1dGhvcml6YXRpb25fY29kZSIsInVzZXJfaWQiOiJjNzk2MzJkZi01Njk5LTRiZTktYTI3MS00ODA4MzRmMzdhZjAiLCJvcmlnaW4iOiJodHRwc2Ftang4Z3Z5cC5hY2NvdW50cy5vbmRlbWFuZC5jb20iLCJ1c2VyX25hbWUiOiJmaW5uLm9sZS5ob3BwZUBzYXAuY29tIiwiZW1haWwiOiJmaW5uLm9sZS5ob3BwZUBzYXAuY29tIiwiYXV0aF90aW1lIjoxNjY2NjIxMTk1LCJyZXZfc2lnIjoiODgzNDdkNTMiLCJpYXQiOjE2NjY2MjYyMTEsImV4cCI6MTY2NjYyOTgxMSwiaXNzIjoiaHR0cHM6Ly9zYXAtaW50ZXJuYWwtdWJuLXEuYXV0aGVudGljYXRpb24uZXUxMC5oYW5hLm9uZGVtYW5kLmNvbS9vYXV0aC90b2tlbiIsInppZCI6ImJhOTBlYmZkLWY0YTQtNDJlMy04ZWQ5LTVmMThlZjlkYWIxZSIsImF1ZCI6WyJhcHByb3V0ZXItc2FjLXNhY2V1MTAhdDM2NTAuc2FwLmZwYSIsInVhYSIsIm9wZW5pZCIsInNiLWE0ZDc5NzBmLTcwZTgtNGY0Ny05Y2Y5LWY4YWJiN2YxYmRkZiFiMTQ1ODIxfGNsaWVudCFiMzY1MCJdfQ.rPuaHtNOw2Sj6ICURprn8RTyCtzfsvVE02_8PPMzGvseAFhM5Lo1r-z6Edo979kAJrwLTzzMLzUllA7w4RWtZ-1OtQNhuN-XVdz9123-KiCpgMAorcv7WgQJocq6LatECcafUK3c19ooJzTc7_dYv2UQwrvAga90aFErBEi5xvnoKn2iOYIUhkhB4amyhFyr_i7wiRDtCc6KRZ8fFApUfYuboiPlMcZUp0-Qy5UAfg7a96nsIugtK9yqvZyb1egiWbJ3d8CgTTm0RGjQG6bTa-Lpb4oiQcu-KjnL9X-Ey3l5mOT4UE-OsrhvUnWNrX4DIvnf6jkVqX3RI-WECYkWYw"
const refreshToken = "5b3571908db3407aadadf57332dcba97-r"

// Post Info
const basicAuthStringPost = "c2ItMGUyNDc0NmEtZDZjZi00NjFhLTkxN2YtYWNiMzg5NTBkZDhjIWIxMzcyMjJ8aXQtcnQtY2F0ZW5heC1pbnQtYzk5bjJ0aTYhYjExNzkxMjoxZmY2NmJjMC1jY2YxLTRmZTYtYTA4Zi1mZDMyNDhhMzZlZjYkemVtSjhWek1UekU1UnlCYlBscE1iRUlDUDNXaUVhdG03U0E0RkpNTFlQOD0="
const postURL = 'https://catenax-int-c99n2ti6.it-cpi018-rt.cfapps.eu10-003.hana.ondemand.com/http/get_Defected_Parts_Info'
const sampleBody = '{ 	"value": [ 		{ 			"modelIdentifier": "BMWX6", 			"anonymizedIdentifier": "SN-BMWX6-1666798812963", 			"description": "GearBox" 		}, 		{ 			"modelIdentifier": "BMWX6", 			"anonymizedIdentifier": "SN-BMWX6-1667509953808", 			"description": "Sensor" 		}, 		{ 			"modelIdentifier": "BMWX6", 			"anonymizedIdentifier": "SN-BMWX6-16675099538-1", 			"description": "Sensor" 		}, 		{ 			"modelIdentifier": "BMWX6", 			"anonymizedIdentifier": "SN-BMWX6-1667509953808", 			"description": "Gear Box" 		}, 		{ 			"modelIdentifier": "AUDIQ5", 			"anonymizedIdentifier": "SN-AUDIQ5-1666996514111", 			"description": "1O222E8-43" 		} 	] }'

ar.beforeRequestHandler.use('/do', async function myMiddleware(req, res, next) {

    // fetch table data
    const tableData = await fetchData(res)
    delete tableData["@odata.context"]
    
    // post to other api
    const response = await sendData(res, tableData)

    // display response
    res.end()
});
ar.start();

async function fetchData(res) {
    res.write("\nfetching table data\n")
    let output = undefined

    let retry = true
    while (retry) {
        retry = false

        var requestOptions = {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${currentToken}`
            },
            redirect: 'follow'
        };
        
        await fetch("https://sap-internal-ubn-q.eu10.hcs.cloud.sap/api/v1/dwc/consumption/relational/CATENA_X/VR_OData_Input/VR_OData_Input", requestOptions)
            .then(response => response.text())
            .then(result => {
                output = result
            })
            .catch(error => {
                res.write('error\n', error)
                res.send("failed2\n")
            });
    
        if (output == "Unauthorized") {
            retry = true
            await getNewToken(res)
            res.write("\nfetching again with new token\n")
        }
    }

    res.write("---------------------response----------------------\n")
    res.write(`${JSON.stringify(JSON.parse(output), null, 4)}\n`)
    res.write("-----------------------end-------------------------\n")

    return output
}

async function getNewToken(res) {
    res.write("refreshing token\n")

    var urlencoded = new URLSearchParams();
    urlencoded.append("response_type", "token");
    urlencoded.append("refresh_token", refreshToken);
    urlencoded.append("grant_type", "refresh_token");

    await fetch("https://sap-internal-ubn-q.authentication.eu10.hana.ondemand.com/oauth/token", {
        method: 'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-sap-sac-custom-auth': true,
            Authorization: `Basic ${basicAuthStringFetch}`
        },
        body: urlencoded
    })
        .then(response => response.json())
        .then(result => {
            res.write("refreshed token\n")
            currentToken = result.access_token
        })
}

async function sendData(res, tableData) {
    res.write("\nsending table data\n")

    var requestOptions = {
        method: 'POST',
        headers: {
            "Authorization": `Basic ${basicAuthStringPost}`,
            "Content-Type" : "application/json"
        },
        body: tableData,
        redirect: 'follow'
    };
    
    let outputText = undefined
    let responseStatus = undefined
    let responseMessage = undefined

    await fetch(postURL, requestOptions)
        .then(response => 
            {
                responseStatus = response.status
                responseMessage = response.statusText
                return response.text()
            })
        .then(result => {            
            if (responseStatus < 300) outputText = JSON.stringify(JSON.parse(result), null, 4)
            //else if (response.code > 400 && response.status < 500) throw Exception(`${response}`)
            else if (responseStatus > 499 && responseStatus <= 599) outputText = `${responseMessage}: ${result}`
        })
        .catch(error => {
            res.write('error\n', error)
            res.end("failed to send Data: " + error)
        });

    res.write("---------------------response----------------------\n")
    res.write(outputText.replace('\n\n', '') + '\n')
    res.write("-----------------------end-------------------------\n")
    
    return outputText
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }
  
  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
  }
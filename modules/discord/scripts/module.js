({
  "content": `
    <div>
      <h2 style="color: white;">Получить токен</h2>
      <textarea placeholder="Скрипт" readonly>webpackChunkdiscord_app.push([[0],,e=>Object.keys(e.c).find(d=>(t=e(d)?.default?.getToken?.())&&typeof t=="string"&&console.log(t))])</textarea>
      <br><br>
      <button data-call="copy">Копировать</button>
    </div>
    <br />
    <br />
    <div>
      <h2 style="color: white;">Войти по токену</h2>
      <textarea placeholder="Скрипт" readonly>function login(t){setInterval(_=>{document.body.appendChild(document.createElement\`iframe\`).contentWindow.localStorage.token=\`"\${t}"\`},50);setTimeout(_=>location.reload(),2500)}login("ТОКЕН")</textarea>
      <br><br>
      <button data-call="copy">Копировать</button>
    </div>
    <br />
    <br />
    <div>
      <h2 style="color: white;">Режим разработчика (эксперименты)</h2>
      <textarea placeholder="Скрипт" readonly>webpackChunkdiscord_app.push([[Math.random()],{},a=>{a.b!=null&&(module=Object.values(a.c).find(a=>a?.exports?.default?.getUsers&&a.exports.default._dispatcher._actionHandlers).exports.default)}]),nodes=Object.values(module._dispatcher._actionHandlers._dependencyGraph.nodes);try{nodes.find(a=>"ExperimentStore"==a.name).actionHandler.OVERLAY_INITIALIZE({user:{flags:1}})}catch(a){}original=[module.getCurrentUser,module.getNonImpersonatedCurrentUser],module.getCurrentUser=module.getNonImpersonatedCurrentUser=()=>({isStaff:()=>!0}),nodes.find(a=>"DeveloperExperimentStore"==a.name).actionHandler.OVERLAY_INITIALIZE(),[module.getCurrentUser,module.getNonImpersonatedCurrentUser]=original;</textarea>
      <br><br>
      <button data-call="copy">Копировать</button>
    </div>
    <br />
    <br />
    <div>
      <h2 style="color: white;">Выполнить квест</h2>
      <textarea placeholder="Скрипт" readonly>delete window.$;let wpRequire=webpackChunkdiscord_app.push([[Symbol()],{},e=>e]);webpackChunkdiscord_app.pop();let ApplicationStreamingStore=Object.values(wpRequire.c).find((e=>e?.exports?.A?.__proto__?.getStreamerActiveStreamMetadata)).exports.A,RunningGameStore=Object.values(wpRequire.c).find((e=>e?.exports?.Ay?.getRunningGames)).exports.Ay,QuestsStore=Object.values(wpRequire.c).find((e=>e?.exports?.A?.__proto__?.getQuest)).exports.A,ChannelStore=Object.values(wpRequire.c).find((e=>e?.exports?.A?.__proto__?.getAllThreadsForParent)).exports.A,GuildChannelStore=Object.values(wpRequire.c).find((e=>e?.exports?.Ay?.getSFWDefaultChannel)).exports.Ay,FluxDispatcher=Object.values(wpRequire.c).find((e=>e?.exports?.h?.__proto__?.flushWaitQueue)).exports.h,api=Object.values(wpRequire.c).find((e=>e?.exports?.Bo?.get)).exports.Bo;const supportedTasks=["WATCH_VIDEO","PLAY_ON_DESKTOP","STREAM_ON_DESKTOP","PLAY_ACTIVITY","WATCH_VIDEO_ON_MOBILE"];let quests=[...QuestsStore.quests.values()].filter((e=>e.userStatus?.enrolledAt&&!e.userStatus?.completedAt&&new Date(e.config.expiresAt).getTime()>Date.now()&&supportedTasks.find((t=>Object.keys((e.config.taskConfig??e.config.taskConfigV2).tasks).includes(t))))),isApp="undefined"!=typeof DiscordNative;if(0===quests.length)console.log("You don't have any uncompleted quests!");else{let e=function(){const t=quests.pop();if(!t)return;const o=Math.floor(3e4*Math.random())+1e3,s=t.config.application.id,a=t.config.application.name,n=t.config.messages.questName,r=t.config.taskConfig??t.config.taskConfigV2,i=supportedTasks.find((e=>null!=r.tasks[e])),l=r.tasks[i].target;let p=t.userStatus?.progress?.[i]?.value??0;if("WATCH_VIDEO"===i||"WATCH_VIDEO_ON_MOBILE"===i){const o=10,s=7,a=1,r=new Date(t.userStatus.enrolledAt).getTime();let i=!1;(async()=>{for(;;){const e=Math.floor((Date.now()-r)/1e3)+o,n=p+s;if(e-p>=s){const e=await api.post({url:\`/quests/\${t.id}/video-progress\`,body:{timestamp:Math.min(l,n+Math.random())}});i=null!=e.body.completed_at,p=Math.min(l,n)}if(n>=l)break;await new Promise((e=>setTimeout(e,1e3*a)))}i||await api.post({url:\`/quests/\${t.id}/video-progress\`,body:{timestamp:l}}),console.log("Quest completed!"),e()})(),console.log(\`Spoofing video for \${n}.\`)}else if("PLAY_ON_DESKTOP"===i)isApp?api.get({url:\`/applications/public?application_ids=\${s}\`}).then((n=>{const r=n.body[0],i=r.executables?.find((e=>"win32"===e.os))?.name?.replace(">","")??r.name.replace(/[\/\\\\:*?"<>|]/g,""),u={cmdLine:\`C:\\\\Program Files\\\\\${r.name}\\\\\${i}\`,exeName:i,exePath:\`c:/program files/\${r.name.toLowerCase()}/\${i}\`,hidden:!1,isLauncher:!1,id:s,name:r.name,pid:o,pidPath:[o],processName:r.name,start:Date.now()},c=RunningGameStore.getRunningGames(),d=[u],g=RunningGameStore.getRunningGames,m=RunningGameStore.getGameForPID;RunningGameStore.getRunningGames=()=>d,RunningGameStore.getGameForPID=e=>d.find((t=>t.pid===e)),FluxDispatcher.dispatch({type:"RUNNING_GAMES_CHANGE",removed:c,added:[u],games:d});let S=o=>{let s=1===t.config.configVersion?o.userStatus.streamProgressSeconds:Math.floor(o.userStatus.progress.PLAY_ON_DESKTOP.value);console.log(\`Quest progress: \${s}/\${l}\`),s>=l&&(console.log("Quest completed!"),RunningGameStore.getRunningGames=g,RunningGameStore.getGameForPID=m,FluxDispatcher.dispatch({type:"RUNNING_GAMES_CHANGE",removed:[u],added:[],games:[]}),FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS",S),e())};FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS",S),console.log(\`Spoofed your game to \${a}. Wait for \${Math.ceil((l-p)/60)} more minutes.\`)})):console.log("This no longer works in browser for non-video quests. Use the discord desktop app to complete the",n,"quest!");else if("STREAM_ON_DESKTOP"===i)if(isApp){let n=ApplicationStreamingStore.getStreamerActiveStreamMetadata;ApplicationStreamingStore.getStreamerActiveStreamMetadata=()=>({id:s,pid:o,sourceName:null});let r=o=>{let s=1===t.config.configVersion?o.userStatus.streamProgressSeconds:Math.floor(o.userStatus.progress.STREAM_ON_DESKTOP.value);console.log(\`Quest progress: \${s}/\${l}\`),s>=l&&(console.log("Quest completed!"),ApplicationStreamingStore.getStreamerActiveStreamMetadata=n,FluxDispatcher.unsubscribe("QUESTS_SEND_HEARTBEAT_SUCCESS",r),e())};FluxDispatcher.subscribe("QUESTS_SEND_HEARTBEAT_SUCCESS",r),console.log(\`Spoofed your stream to \${a}. Stream any window in vc for \${Math.ceil((l-p)/60)} more minutes.\`),console.log("Remember that you need at least 1 other person to be in the vc!")}else console.log("This no longer works in browser for non-video quests. Use the discord desktop app to complete the",n,"quest!");else if("PLAY_ACTIVITY"===i){const o=\`call:\${ChannelStore.getSortedPrivateChannels()[0]?.id??Object.values(GuildChannelStore.getAllGuilds()).find((e=>null!=e&&e.VOCAL.length>0)).VOCAL[0].channel.id}:1\`;(async()=>{for(console.log("Completing quest",n,"-",t.config.messages.questName);;){const e=(await api.post({url:\`/quests/\${t.id}/heartbeat\`,body:{stream_key:o,terminal:!1}})).body.progress.PLAY_ACTIVITY.value;if(console.log(\`Quest progress: \${e}/\${l}\`),await new Promise((e=>setTimeout(e,2e4))),e>=l){await api.post({url:\`/quests/\${t.id}/heartbeat\`,body:{stream_key:o,terminal:!0}});break}}console.log("Quest completed!"),e()})()}};e()}</textarea>
      <br><br>
      <button data-call="copy">Копировать</button>
    </div>
    <br />
    <br />
  `,
  "copy": (_, event) => {
    navigator.clipboard.writeText(event.target.parentElement.querySelector("textarea").value);
  }

})




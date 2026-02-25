const CONFIG_SERVICES = [
    {
        category: "Daily links",
        items: [
            { title: "AbuseipDB", description: "IP reputation", icon: "https://www.abuseipdb.com/img/abuseipdb.png", url: "https://www.abuseipdb.com/" },
            { title: "DEMO12", description: "flask-conical", icon: "flask-conical", url: "https://demo12.nudnov.net/" },
            { title: "vpn-portal", description: "flask-conical", icon: "squares-intersect", url: "https://vpn-portal.netlify.app/" }
        ]
    },
    {
        category: "LiveDNS services",
        items: [
            { title: "livedns", description: "Homepage", icon: "https://www.livedns.co.il/images/responsive/logo.png", url: "https://www.livedns.co.il/" },
            { title: "livedns orders", description: "Admin Login", icon: "https://www.livedns.co.il/images/responsive/logo.png", url: "https://www.livedns.co.il/_Admin/Login.aspx" },
            { title: "domains", description: "Management", icon: "https://www.livedns.co.il/images/responsive/logo.png", url: "https://domains.livedns.co.il/" },
            { title: "domains mgnt", description: "Admin", icon: "https://www.livedns.co.il/images/responsive/logo.png", url: "https://domains.livedns.co.il/Admin/Login.aspx" }
        ]
    },
    {
        category: "Our services",
        items: [
            { title: "DNS admin", description: "Authentication 😎", icon: "https://www.livedns.co.il/images/responsive/logo.png", url: "http://dns.livedns.co.il/" },
            { title: "helpdesk", description: "Support", icon: "https://www.livedns.co.il/images/responsive/logo.png", url: "https://helpdesk.livedns.co.il/Login.aspx" },
            { title: "livedns.support", description: "BO Login", icon: "https://www.livedns.co.il/images/responsive/logo.png", url: "https://livedns.support/en/boffice/login" },
            { title: "Office contacts", description: "List", icon: "https://www.livedns.co.il/images/responsive/logo.png", url: "https://www.livedns.co.il/office-contacts.html" }
        ]
    },
    {
        category: "Office 365 & Microsoft",
        items: [
            { title: "Outlook 365", description: "Mail", icon: "https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png", url: "https://outlook.office.com/" },
            { title: "CSP Management", description: "Users", icon: "https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png", url: "https://partner.microsoft.com/dashboard/v2/account-settings/usermanagement#users" },
            { title: "Exchange Admin", description: "Mailboxes", icon: "https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png", url: "https://admin.exchange.microsoft.com/#/mailboxes" },
            { title: "Active Users", description: "M365 Admin", icon: "https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png", url: "https://admin.cloud.microsoft/?#/users" },
            { title: "Azure Portal", description: "Home", icon: "https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png", url: "https://portal.azure.com/#home" },
            { title: "SPLA Licensing", description: "Downloads", icon: "https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png", url: "https://admin.cloud.microsoft/?#/subscriptions/vlnew/downloadsandkeys" }
        ]
    },
    {
        category: "Hypervisor",
        items: [
            { title: "Proxmox", description: "PVE", icon: "box", url: "https://pve.livedns.cloud:8006/" },
            { title: "PBS", description: "Backup Server", icon: "database", url: "https://10.100.0.160:8007/" },
            { title: "VMware VC200", description: "vCenter", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg", url: "https://vc200.livecloud.local/" },
            { title: "Appliance Mgmt", description: "vCenter Server", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg", url: "https://vc200.livecloud.local:5480/#/login" },
            { title: "VMware Office", description: "10.0.0.210", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg", url: "https://10.0.0.210" },
            { title: "Office Monitor", description: "10.0.0.217", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg", url: "https://10.0.0.217" },
            { title: "VMware Monitor", description: "10.113.0.200", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg", url: "https://10.113.0.200" }
        ]
    },
    {
        category: "Mail Services",
        items: [
            { title: "SMTPIN", description: "Shared SMTP", icon: "send", url: "https://smtpin.lvdns.com:8006/" },
            { title: "PMG", description: "Private SMTP", icon: "lock", url: "https://pmg.lvdns.com:8006/" },
            { title: "Mail Admin", description: "MailEnable", icon: "hard-drive", url: "https://mailserver.livedns.co.il/Userlogin.aspx" },
            { title: "Web-Mail", description: "Co.il", icon: "mouse-pointer", url: "https://web-mail.co.il/" }
        ]
    },
    {
        category: "Firewalls",
        items: [
            { title: "FG-200G", description: "62.219.78.1", icon: "shield", url: "https://62.219.78.1/" },
            { title: "FG-200G-PVE", description: "185.68.120.1", icon: "shield-check", url: "https://185.68.120.1/" },
            { title: "FG-80F", description: "Office GW", icon: "shield", url: "https://10.0.0.254" },
            { title: "FG-60D", description: "VPN Client", icon: "link", url: "https://82.81.95.106/login" },
            { title: "FG-200E", description: "Monitoring", icon: "eye", url: "https://84.110.122.74:12243/" },
            { title: "pfSense", description: "84.110.122.74", icon: "shield-alert", url: "https://84.110.122.74:411/index.php" }
        ]
    },
    {
        category: "Security tools",
        items: [
            { title: "FortiDDoS-200F", description: "DDoS Protection", icon: "https://icons.fortinet.com/icons/November-2023/DDoS.svg", url: "https://62.219.78.4" },
            { title: "FortiWEB", description: "WAF", icon: "https://icons.fortinet.com/icons/Services/Cloud%20Service%20Products/FortiSASE-SIA%20Cloud.svg", url: "https://62.219.78.2" },
            { title: "FortiAnalyzer", description: "Logs & Analysis", icon: "https://icons.fortinet.com/icons/New%20-%20updated%20icons%202025/March/FortiCentral.svg", url: "https://62.219.78.9/" },
            { title: "FLOWSEC", description: "Secunity", icon: "https://customer.secunity.io/assets/logo-CVMckJWk.svg", url: "https://customer.secunity.io/login" },
            { title: "ESET Protect", description: "on-prem", icon: "https://upload.wikimedia.org/wikipedia/he/f/f0/ESET_logo.svg", url: "https://liveav.lvdns.com/era/webconsole/" },
            { title: "ESET EMA", description: "MSP Portal", icon: "https://upload.wikimedia.org/wikipedia/he/f/f0/ESET_logo.svg", url: "https://msp.eset.com/ema/dashboard" }
        ]
    },
    {
        category: "Network & Storage",
        items: [
            { title: "HP2920", description: "Primary Switch", icon: "server", url: "http://10.1.0.40" },
            { title: "HP5700", description: "PVE Switch", icon: "server", url: "https://10.100.0.250" },
            { title: "FortiSwitch-A", description: "Switch A", icon: "https://icons.fortinet.com/icons/Secure%20Networking/Products/FortiSwitch.svg", url: "https://10.1.0.4" },
            { title: "FortiSwitch-B", description: "Switch B", icon: "https://icons.fortinet.com/icons/Secure%20Networking/Products/FortiSwitch.svg", url: "https://10.1.0.5" },
            { title: "NIMBLE PVE", description: "HP Storage", icon: "database", url: "https://10.100.0.100/#/login" },
            { title: "MSA Backup", description: "Storage", icon: "database", url: "https://10.100.0.150/" },
            { title: "FlashSystem", description: "IBM 7300", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/250px-IBM_logo.svg.png", url: "https://10.10.169.100/" },
            { title: "cTera C200", description: "Office Backups", icon: "https://www.ctera.com/wp-content/uploads/2024/07/ctera-logo-white.svg", url: "https://10.0.0.180" }
        ]
    },
    {
        category: "Support",
        items: [
            { title: "Fortinet Support", description: "Tickets", icon: "https://support.fortinet.com/welcome/assets/img/supportNew/img/logo.svg", url: "https://support.fortinet.com/" },
            { title: "UCS Intersight", description: "Cisco", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg", url: "https://eu-central-1.intersight.com/" },
            { title: "IBM Insights", description: "Storage", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/250px-IBM_logo.svg.png", url: "https://login.ibm.com/..." },
            { title: "DELL Support", description: "Service Requests", icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg", url: "https://www.dell.com/support/mps/en-us/servicerequests" }
        ]
    },
    {
        category: "Monitors",
        items: [
            { title: "Kuma Shaham BE8", description: "Uptime", icon: "activity", url: "http://uptime-kuma.lvdns.com:3001/" },
            { title: "Kuma Shaham 84", description: "Uptime", icon: "activity", url: "http://kuma84.lvdns.com:3001/dashboard" },
            { title: "Kuma Oracle", description: "Uptime", icon: "activity", url: "http://uptime-kuma-oracle.lvdns.com:3001/dashboard" },
            { title: "Kuma Amsterdam-vultr", description: "Uptime", icon: "activity", url: "78.141.218.37:3001/dashboard" },
            { title: "Z7 Primary", description: "zabbix 7.4", icon: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Zabbix_logo.png", url: "https://z7.nudnov.net/" },
            { title: "S5 Office", description: "zabbix 7.4", icon: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Zabbix_logo.png", url: "https://s5-office.nudnov.net/" },
            { title: "S4 VPS", description: "monitor", icon: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Zabbix_logo.png", url: "https://s4.lvdns.com" }
        ]
    },
    {
        category: "Logs & Tools",
        items: [
            { title: "WAZUH", description: "SIEM", icon: "search", url: "https://wazuh0306.lvdns.com/" },
            { title: "LibreNMS", description: "SNMP & SYSLOG", icon: "activity", url: "http://librenms.lvdns.com/" },
            { title: "Pass11", description: "Passwords", icon: "key", url: "http://pass11.lvdns.com/syspass/" },
            { title: "IPAM", description: "phpipam", icon: "map", url: "http://ipmanager.livedns.local/" },
            { title: "Netbox", description: "DCIM", icon: "box", url: "https://netbox.lvdns.com/" }
        ]
    },
    {
        category: "Office & MSP",
        items: [
            { title: "Akuvox", description: "Gate Control", icon: "shield", url: "http://10.0.0.54/" },
            { title: "NetAlert", description: "Network Monitor", icon: "bell", url: "http://lvadm:20211/" },
            { title: "LiveBACKUP MSP", description: "Dashboard", icon: "https://www.livedns.co.il/images/responsive/logo.png", url: "https://msp.livebackup.co.il/Partners/Dashboard" },
            { title: "Voicenter", description: "CPanel", icon: "https://cpanel.voicenter.co.il/images/agentsvoicentercoil/logo.png", url: "https://cpanel.voicenter.co.il/Login/Index" },
            { title: "itfactory", description: "Portal", icon: "https://mp.itfactoryportal.com/branding/latest/logo.png", url: "https://mp.itfactoryportal.com/v/#/login" },
            { title: "HostedScan", description: "Security Scan", icon: "https://hostedscan.com/images/v2/mark/hostedscan-dark.svg", url: "https://hostedscan.com/dashboard" },
            { title: "Acronis", description: "Cyber Protection", icon: "https://d2kq0urxkarztv.cloudfront.net/5e60f30b6ad81200a9f638f5/2339077/upload-ea55cf9e-7dee-4f53-94b8-e6363b9ce32b.png?w=566", url: "https://il01-cloud.acronis.com/login" },
            { title: "Sentinel One", description: "EPP", icon: "https://www.sentinelone.com/wp-content/themes/sentinelone/assets/svg/header-logo-dark.svg", url: "https://euce1-exclusive.sentinelone.net/dashboard" }
        ]
    },
    {
        category: "Other",
        items: [
            { title: "GitLab", description: "source code", icon: "https://unpkg.com/lucide-static@latest/icons/gitlab.svg", url: "https://gitlab.com" },
            { title: "GitHub", description: "source code", icon: "https://unpkg.com/lucide-static@latest/icons/github.svg", url: "https://github.com" },
            { title: "Meet Homepage", description: "GetHomepage.dev", icon: "home", url: "https://technotim.live/posts/homepage-dashboard/" }
        ]
    }
];





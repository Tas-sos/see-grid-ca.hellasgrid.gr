---
id: certificate-requests
layout: default
title: "Certificate Requests"
date: 2013-03-25T15:13:00+02:00
---

Certificate request generation
==============================

In order to request for a personal certificate via the command line you need to follow the instructions below. First you must connect via ssh to your preferred UI and then issue the following command

```
mkdir %temporary_folder%
cd %temporary_folder%
```

where you should substitute ```%temporary_folder%``` with a name you prefer. SEE-GRID CA issues certificates under one of the following name schemes:

```
/DC=ORG/DC=SEE-GRID/O={People|Hosts}/O={Institution Name}/CN={Firstname Lastname}
or
/DC=EU/DC=EGI/C={Country Code}/O={People|Hosts}/O={Institution Name}/CN={Firstname Lastname}
```

Please consult your local RA on which name scheme is appropriate for you to use. In the following examples the second namescheme will be used as a template. To generate the request file and private key file issue the following command.

```
openssl req -newkey rsa:2048 -subj "/DC=EU/DC=EGI/C={Country Code}/O={People|Hosts}/O={Institution Name}/CN={Firstname Lastname}" -out cert_request.pem
```

1. Substitute ``{Country Code}`` with the two letter ISO 3166-1 Alpha-2 code of the country in capital letters. 
1. Substitute ``{People|Hosts}`` with ``People`` if this request is for a personal certificate or ``Hosts`` if the request os made for a host, service or robot certificate. 
1. Substitute ``{Institution Name}`` with the full name of your institution (for example Greek Research and Technology Network)
1. Substitute ``{Firstname Lastname}`` with your First and Last name. You may add your initials inbetween the First and Last name if you desire. 

After that command an encrypted key will be created using the passphrase that you will provide to the ``privkey.pem``. Also the application will be created to the file named ``cert_request.pem``

In case you get the following error:

```
unable to find 'distinguished_name' in config
problems making Certificate Request
5016:error:0E06D06A:configuration file routines:NCONF_get_string:no conf or environment variable:conf_lib.c:325:
```

then you should execute the following command:

```
openssl req -newkey rsa:2048 -config /usr/share/ssl/openssl.cnf -subj "/DC=EU/DC=EGI/C={Country Code}/O={People|Hosts}/O={Institution Name}/CN={Firstname Lastname}" -out cert_request.pem
```

Once you have created the private key and request files you may forward the request file (NOT the private key one) to your local RA. Your RA will take care of forwarding this request to the SEE-GRID CA where your request file will be signed and your certificate will be returned to you via a signed email.

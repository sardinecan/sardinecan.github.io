---
title: "Toucher pour cliquer avec i3wm"
date: 2024-05-15
author: "jmorvan"
category: 'setup'
keywords: "setup ; i3 ; linux ; mac"
---

Utiliser la commande `xinput` pour lister les devices :
```shell
xinput           
⎡ Virtual core pointer                    	id=2	[master pointer  (3)]
⎜   ↳ Virtual core XTEST pointer              	id=4	[slave  pointer  (2)]
⎜   ↳ bcm5974                                 	id=12	[slave  pointer  (2)]
⎣ Virtual core keyboard                   	id=3	[master keyboard (2)]
    ↳ Virtual core XTEST keyboard             	id=5	[slave  keyboard (3)]
    ↳ Power Button                            	id=6	[slave  keyboard (3)]
    ↳ Video Bus                               	id=7	[slave  keyboard (3)]
    ↳ Power Button                            	id=8	[slave  keyboard (3)]
    ↳ Sleep Button                            	id=9	[slave  keyboard (3)]
    ↳ Apple Computer, Inc. IR Receiver        	id=10	[slave  keyboard (3)]
    ↳ Apple Inc. Apple Internal Keyboard / Trackpad	id=11	[slave  keyboard (3)]

```

Puis la commande `xinput list-props <device>` d'afficher les propriétés d'un matériel.
```shell
xinput list-props 12
Device 'bcm5974':
	Device Enabled (176):	1
	Coordinate Transformation Matrix (178):	1.000000, 0.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000, 0.000000, 1.000000
	libinput Tapping Enabled (315):	0
	libinput Tapping Enabled Default (316):	0
	libinput Tapping Drag Enabled (317):	1
	libinput Tapping Drag Enabled Default (318):	1
	libinput Tapping Drag Lock Enabled (319):	0
	libinput Tapping Drag Lock Enabled Default (320):	0
	libinput Tapping Button Mapping Enabled (321):	1, 0
	libinput Tapping Button Mapping Default (322):	1, 0
	libinput Natural Scrolling Enabled (323):	0
	libinput Natural Scrolling Enabled Default (324):	0
	libinput Disable While Typing Enabled (325):	1
	libinput Disable While Typing Enabled Default (326):	1
	libinput Scroll Methods Available (327):	1, 1, 0
	libinput Scroll Method Enabled (328):	1, 0, 0
	libinput Scroll Method Enabled Default (329):	1, 0, 0
	libinput Click Methods Available (330):	1, 1
	libinput Click Method Enabled (331):	0, 1
	libinput Click Method Enabled Default (332):	0, 1
	libinput Middle Emulation Enabled (333):	0
	libinput Middle Emulation Enabled Default (334):	0
	libinput Accel Speed (335):	0.000000
	libinput Accel Speed Default (336):	0.000000
	libinput Accel Profiles Available (337):	1, 1
	libinput Accel Profile Enabled (338):	1, 0
	libinput Accel Profile Enabled Default (339):	1, 0
	libinput Left Handed Enabled (340):	0
	libinput Left Handed Enabled Default (341):	0
	libinput Send Events Modes Available (300):	1, 1
	libinput Send Events Mode Enabled (301):	0, 0
	libinput Send Events Mode Enabled Default (302):	0, 0
	Device Node (303):	"/dev/input/event8"
	Device Product ID (304):	1452, 595
	libinput Drag Lock Buttons (342):	<no items>
	libinput Horizontal Scroll Enabled (343):	1
	libinput Scrolling Pixel Distance (344):	15
	libinput Scrolling Pixel Distance Default (345):	15
	libinput High Resolution Wheel Scroll Enabled (346):	1

```

La propriété qui nous intéresse est indiquer à la ligne `libinput Tapping Enabled (315): 0`. Pour activer "toucher pour cliquer", il suffit simplement de changer la valeur `0` par `1` avec la commande :
`xinput set-prop 12 315 1`. Et voilà !


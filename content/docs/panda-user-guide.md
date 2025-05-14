---
title: "PANDA User Guide"
description: "How to use the PANDA mod loader."
date: 2025-05-14
draft: false
layout: "docs"
params:
   subtitle: "Documentation"
---

PANDA (Project and Animal) Loader is a mod loader for Zoo Tycoon that lets users manage and install mods easily. It also functions as the main GUI for the OpenZT API, letting users enable scripting and other OpenZT features.

![fig1](../images/panda1.jpg)

## Features

- **Mod Management**: Easily install, enable, disable, and remove mods.
- **OpenZT Integration**: Access OpenZT features directly from the GUI.
- **Zoo.INI Settings**: Modify Zoo.INI settings through the GUI.
- **Search Functionality**: Quickly find mods by title or author.
- **Sprite Extraction**: Extract icon sprites from mods for use in your own projects.

## Installation

At the moment, PANDA does not have a binary installer. To install PANDA, you will need to compile it from source. You can find the source code on the [PANDA GitHub repository](https://github.com/openztcc/PANDA).

### Dependencies

- zlib 1.3.1
- QuaZip (Wrapper for zlib)
- Toml++
- SimpleIni
- APE Graphics Parser
- MingW 13.1.0

All dependencies are included in the repository with exception for MingW, which you will need to install separately. The project uses Qt 6.8.1 which includes this version of MingW by default. You can find the Qt installer [here](https://www.qt.io/download-qt-installer).

### Compiling

PANDA currently only targets Windows, so you will need Powershell to run the build script. Replace the following flags with your respective paths to gcc, g++, and mingw_64.

```powershell
cmake -G "Ninja" `
-DCMAKE_C_COMPILER="F:/QT/Tools/mingw1310_64/bin/gcc.exe" `
-DCMAKE_CXX_COMPILER="F:/QT/Tools/mingw1310_64/bin/g++.exe" `
-DCMAKE_PREFIX_PATH="F:/QT/6.8.1/mingw_64" `
-S . -B ./build
```

After running the above command, you can run the build script to compile PANDA. The output will be in the `build` directory. Qt still needs all dependencies to be installed, so you will need to run the following command to install them:

```powershell
windeployqt
```

This will copy all the necessary DLLs to the `build` directory. You can then run PANDA from the `build` directory or copy the contents to a preferred location.

## Usage

### Starting PANDA

On first load, PANDA will create a directory in `C:/Users/<your name>/.panda` where it will store all settings and mod data. There are a few important files and directories that will be created:

- `panda.toml`: This file contains the main configuration for PANDA. Here you can set the path to your Zoo Tycoon installation, as well as the path to an ISO file if you are using one. If you are using an ISO, make sure you set the `useIsoMounting` flag to `true`. Don't worry about mounting the image, PANDA will do that for you.
- `/modicons`: This directory contains all the mod icons that PANDA has extracted from the mods using the APE Graphics Parser.
- `/resources/mods/.disabled`: PANDA will automatically move mods to this directory when you disable them.

Loading mods on first go might take a few minutes if you have a lot of files in the `dlupdate` directory.

### Installing Mods

PANDA does not currently have an add file function, so you will need to add files manually to the `dlupdate` directory in your Zoo Tycoon installation. Make sure the files are in .ztd format and that they sit at the root of that directory. Make sure to re-launch PANDA and it will know to load your new mods.

### Enabling/Disabling Mods

![fig2](../images/panda2.jpg)

### Search Mods

To search for mods, simply type in the search bar at the top of the window. PANDA uses a tag system for search, so by prefixing your mod with `by:` you can search by author. Delete the tag to search by title. We are actively working on additional tags to make searching easier, so stay tuned for updates.

![fig3](../images/panda3.jpg)

To clear the searchbar quickly, simply hit the `Esc` key. This will also reset the search to show all mods.

### Extracting Sprites

As mentioned earlier, you can access extracted icon sprites from the mods in the `../panda/modicons` directory. This is useful if you want to use the icons in your own projects. Future development will additionally allow extraction of other kinds of sprites, such as animal sprites if they are available in the mod.

![fig4](../images/panda4.jpg)

### Zoo.INI Settings

The Zoo.INI file is located in the root of your Zoo Tycoon installation and contains configuration for things like the game resolution, sound settings, and other options. You can modify these settings directly from the PANDA GUI without needing to open the file manually. To do this, visit the `Settings` tab in the PANDA GUI.

![fig5](../images/panda5.jpg)

All settings are self-documented from the menu. Just make sure to save the changes before moving screens so that the file is propagated.
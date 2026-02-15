// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "Ztoast",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "Ztoast",
            targets: ["ZToastPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "8.0.0")
    ],
    targets: [
        .target(
            name: "ZToastPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/ZToastPlugin"),
        .testTarget(
            name: "ZToastPluginTests",
            dependencies: ["ZToastPlugin"],
            path: "ios/Tests/ZToastPluginTests")
    ]
)